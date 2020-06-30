import React, {useContext} from 'react';
import {context} from '../../context';
import {parseJobListToUi} from '../../features/job';

import Button from '../../components/Button';
import migrationHook from '../../hooks/migrateHook';
import ModalStatus from '../ModalStatus';
import Table from '../../components/Table';
import ModalMigrate from './ModalMigrate';
import logHook from '../../hooks/logHook'
import LogResult from '../Log';

import './index.css';
import { handleMigrate } from '../../features/migration';

const MigrateAllRecord = () => {
  const {migration, app, job,log} = useContext(context);

  const {status: migrateStatus, error: migrateError, isLoading: migrateLoading} = migration.state as migrateRecordsFail;
  const {records: fieldMapList, isLoading: appLoading, error: appError, status: appStatus} = app.state;
  const {jobList} = job.state;

  const useMigration = migrationHook();
  const useLog = logHook();

  const error = appError || migrateError;
  const isLoading = appLoading || migrateLoading;
  const status = migrateStatus || appStatus;
  
  const jobListUi = parseJobListToUi(jobList);
  const logList = log.state.listLog

  return (
    <div className="wrap-migrate-records">
      <ModalStatus error={error} isLoading={isLoading} status={status} />
      <Table title={"Migration"} headerList={['No', 'Job', 'Action']} rowList={jobListUi} />
      {jobList.map((job, key) => {
        const {migrateInfo} = job;        
        migrateInfo.fields = migrateInfo.fields as string;
        return (
          <React.Fragment key={key}>
            <ModalMigrate
              title={job.title}
              fields={migrateInfo.fields}
              query={migrateInfo.query}
              tokenAppTo={migrateInfo.tokenAppTo}
              toApp={migrateInfo.toApp}
              fromDomain={migrateInfo.fromDomain}
              fromApp={migrateInfo.fromApp}
              tokenAppFrom={migrateInfo.tokenAppFrom}
              toDomain={migrateInfo.toDomain}
              isOpen={job.selected}
              id={job.id}
            />
          </React.Fragment>
        );
      })}

      <Button
        label={'Migrate Records'}
        onClick={async () =>{
         let newLogList= await  handleMigrate(logList,jobList,useMigration);
         useLog.saveLog(newLogList)            
        }}
      />
      <LogResult/>
    </div>
  );
};

export default MigrateAllRecord;
