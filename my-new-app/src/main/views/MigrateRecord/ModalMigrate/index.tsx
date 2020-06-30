import React, {useContext, useState, useEffect} from 'react';
import ContainerForm from '../ContainerForm';
import Button from '../../../components/Button';
import InputField from '../../../components/Input';
import {ListFieldMap} from '../FieldMap';
import {parseDataMigrateRecords, parseFieldMapFromTo} from '../../../features/migration';

import {context} from '../../../context';
import appHook from '../../../hooks/appHook';
import {clearJobSelected, addJobMigrateInfor, addFieldMapListToJob, findJobSelected, addTitleToJob, unSaveJob} from '../../../features/job';
import {getFieldAndUpdateLog} from '../../../service/app';
import './index.css';
import jobHook from '../../../hooks/jobHook';
import logHook from '../../../hooks/logHook';
const FieldMapFromTo = ({id}: {id: number}) => {
  return (
    <div className="field-map-from-to">
      <div className="field-map-from">
        <ListFieldMap id={id} showIcon={true} indexListString={'fieldCodeFromList'} field={'from'} />
      </div>
      <div className="field-map-to">
        <ListFieldMap id={id} showIcon={false} indexListString={'fieldCodeToList'} field={'to'} />
      </div>
    </div>
  );
};

const RenderButtonSaveMigrate = ({
  title,
  tokenAppTo,
  toApp,
  fromDomain,
  fromApp,
  tokenAppFrom,
  toDomain,
  id,
  query,
  fields,
  onSave,
}: ButtonFieldMap) => {
  const {job} = useContext(context);
  let {jobList} = job.state;

  const jobUse = jobHook();
  let newJobMatchId = findJobSelected(jobList);

  if (newJobMatchId.migrateInfo.fieldMapList.length > 0) {
    let fieldMapList = newJobMatchId.migrateInfo.fieldMapList;
    return (
      <Button
        label={'Save'}
        onClick={() => {
          let fieldMapFromTo = parseFieldMapFromTo(fieldMapList);
          let migrateRecordsValue = parseDataMigrateRecords({
            fromApp,
            fromDomain,
            toApp,
            toDomain,
            tokenAppFrom,
            tokenAppTo,
            query,
            fields,
            fieldMapFromTo,
            fieldMapList,
          });
          let newJobList = addJobMigrateInfor(jobList, migrateRecordsValue);
          newJobList = addTitleToJob(newJobList, title);
          newJobList = clearJobSelected(newJobList);
          onSave();
          jobUse.saveJob(newJobList);
        }}
      />
    );
  }
  return null;
};

const ModalMigrate = ({title, id, fields, query, tokenAppTo, toApp, fromDomain, fromApp, tokenAppFrom, toDomain, isOpen}: ModalMigrate) => {
  const [currentToDomain, setToDomain] = useState(toDomain);
  const [currentFromDomain, setFromDomain] = useState(fromDomain);
  const [currentFromApp, setFromApp] = useState(fromApp);
  const [currentTokenAppFrom, setTokenAppFrom] = useState(tokenAppFrom);
  const [currentToApp, setToApp] = useState(toApp);
  const [currentTokenAppTo, setTokenAppTo] = useState(tokenAppTo);
  const [currentQuery, setQuery] = useState(query);
  const [currentFields, setFields] = useState(fields);
  const [currentTitle, setTitle] = useState(title);
  const [time, setTime] = useState(null);
  const [call, setCallApi] = useState(null);
  const [isSaveJob, setIsSaveJob] = useState(false);

  const jobUse = jobHook();
  const appUse = appHook();
  const logUse = logHook();

  const {
    app,
    job,
    log: {
      state: {listLog},
    },
  } = useContext(context);
  let {jobList} = job.state;
  const {records: fieldMapList} = app.state;

  let newJobMatchId = findJobSelected(jobList);

  useEffect(() => {
    setToDomain(toDomain);
    setFromDomain(fromDomain);
    setFromApp(fromApp);
    setTokenAppFrom(tokenAppFrom);
    setToApp(toApp);
    setTokenAppTo(tokenAppTo);
    setQuery(query);
    setFields(fields);
    setTitle(title);
  }, [title, fields, query, tokenAppTo, tokenAppFrom, toApp, fromApp, fromDomain, toDomain]);

  useEffect(() => {
    clearTimeout(time);
    setCallApi(false);
    if (isOpen && currentToDomain && currentFromApp && currentFromDomain && currentToApp && currentTokenAppFrom && currentTokenAppTo) {
      let newTime = setTimeout(() => setCallApi(true), 1500);
      setTime(newTime);
    }
  }, [isOpen, currentToDomain, currentFromApp, currentFromDomain, currentToApp, currentTokenAppFrom, currentTokenAppTo]);

  useEffect(() => {
    if (newJobMatchId && newJobMatchId.migrateInfo.fieldMapList.length === 0 && call) {
      (async () => {
        await getFieldAndUpdateLog(
          {
            fromApp: currentFromApp,
            fromDomain: currentFromDomain,
            toApp: currentToApp,
            toDomain: currentToDomain,
            tokenAppFrom: currentTokenAppFrom,
            tokenAppTo: currentTokenAppTo,
          },
          {listLog},
          {appUse, logUse}
        );
      })();
    }
  }, [call]);

  useEffect(() => {
    if (fieldMapList.length > 0) {
      let newJobList = addFieldMapListToJob(jobList, id, fieldMapList);
      jobUse.saveJob(newJobList);
      appUse.clearAllFieldMap();
    }
  }, [fieldMapList.length]);

  if (!isOpen) {
    return <div></div>;
  }

  const resetCurrentJob = () => {
    let job = findJobSelected(jobList);
    let currentJob = JSON.parse(JSON.stringify(jobList));
    let {migrateInfo} = job;
    let fields = migrateInfo.fields as string;
    setToDomain(migrateInfo.toDomain);
    setFromDomain(migrateInfo.fromDomain);
    setFromApp(migrateInfo.fromApp);
    setTokenAppFrom(migrateInfo.tokenAppFrom);
    setToApp(migrateInfo.toApp);
    setTokenAppTo(migrateInfo.tokenAppTo);
    setQuery(migrateInfo.query);
    setFields(fields);
    setTitle(job.title);
    if (!isSaveJob) {
      currentJob = unSaveJob(currentJob);
    }
    return currentJob;
  };

  return (
    <div className="modal-migrate-wrapped full-page-center">
      <div className="modal-migrate-content full-page-content">
        <div className="modal-mirate-title">
          <InputField type={'text'} label={'Job'} defaultValue={currentTitle} onChange={(value: string) => setTitle(value)} />
        </div>
        <ContainerForm
          fromDomain={currentFromDomain}
          fromApp={currentFromApp}
          tokenAppFrom={currentTokenAppFrom}
          setFromDomain={setFromDomain}
          setTokenAppFrom={setTokenAppFrom}
          setFromApp={setFromApp}
          toDomain={currentToDomain}
          toApp={currentToApp}
          tokenAppTo={currentTokenAppTo}
          setToDomain={setToDomain}
          setToApp={setToApp}
          setTokenAppTo={setTokenAppTo}
          query={currentQuery}
          setQuery={setQuery}
          fields={currentFields}
          setFields={setFields}
        />
        <FieldMapFromTo id={id} />
        <RenderButtonSaveMigrate
          fromDomain={currentFromDomain}
          fromApp={currentFromApp}
          toDomain={currentToDomain}
          toApp={currentToApp}
          tokenAppTo={currentTokenAppTo}
          id={id}
          fields={currentFields}
          query={currentQuery}
          title={currentTitle}
          tokenAppFrom={currentTokenAppFrom}
          onSave={() => setIsSaveJob(true)}
        />

        <Button
          label={'Close'}
          onClick={() => {
            let currentJob = resetCurrentJob();
            let newJobList = clearJobSelected(currentJob);

            jobUse.saveJob(newJobList);
          }}
        />
      </div>
    </div>
  );
};

export default ModalMigrate;
