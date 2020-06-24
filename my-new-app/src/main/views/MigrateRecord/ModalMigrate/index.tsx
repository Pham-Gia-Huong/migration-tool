import React, {useContext, useState, useEffect} from 'react';
import ContainerForm from '../ContainerForm';
import Button from '../../../components/Button';
import InputField from '../../../components/Input';
import {ListFieldMap} from '../FieldMap';
import {parseDataMigrateRecords, parseFieldMapFromTo} from '../../../features/migration';
import {request} from '../../../service/index';
import {GET_FORM_FIELD} from '../../../../electronjs/service/app/type';
import {context} from '../../../context';
import appHook from '../../../hooks/appHook';
import {clearJobSelected, addJobMigrateInfor, addFieldMapListToJob, findJobSelected, addTitleToJob} from '../../../features/job';

import './index.css';
import jobHook from '../../../hooks/jobHook';
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

const RenderButtonFieldMapList = ({tokenAppTo, toApp, fromDomain, fromApp, tokenAppFrom, toDomain, id}: ButtonFieldMap) => {
  const {job} = useContext(context);
  let {jobList} = job.state;

  const useApp = appHook();
  let newJobMatchId = findJobSelected(jobList);

  if (newJobMatchId.migrateInfo.fieldMapList.length === 0) {
    return (
      <Button
        label={'Get form field'}
        onClick={() => {
          let formFieldMigrate = parseDataMigrateRecords({
            fromApp,
            fromDomain,
            toApp,
            toDomain,
            tokenAppFrom,
            tokenAppTo,
          });
          request(GET_FORM_FIELD, formFieldMigrate, useApp);
        }}
      />
    );
  }
  return null;
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
          console.log('title', title);

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

  const jobUse = jobHook();
  const appUse = appHook();

  const {app, job} = useContext(context);
  let {jobList} = job.state;
  const {records: fieldMapList} = app.state;

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
        <RenderButtonFieldMapList
          fromDomain={currentFromDomain}
          fromApp={currentFromApp}
          toDomain={currentToDomain}
          toApp={currentToApp}
          tokenAppTo={currentTokenAppTo}
          id={id}
          tokenAppFrom={currentTokenAppFrom}
        />
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
        />

        <Button
          label={'Close'}
          onClick={() => {
            let newJobList = clearJobSelected(jobList);
            resetCurrentJob();
            jobUse.saveJob(newJobList);
          }}
        />
      </div>
    </div>
  );
};

export default ModalMigrate;
