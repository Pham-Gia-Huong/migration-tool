import React, {useState, useContext} from 'react';
import {parseDataMigrateRecords, parseFieldMapFromTo} from '../../features/migration';
import {context} from '../../context';
import {parseJobListToUi, isJobValidMigrate} from '../../features/job';

import Button from '../../components/Button';
import migrationHook from '../../hooks/migrateHook';
import ModalStatus from '../ModalStatus';
import Table from '../../components/Table';
import ModalMigrate from './ModalMigrate';
import {request} from '../../service';
import './index.css';

const MigrateAllRecord = () => {


  const {migration, app, job} = useContext(context);

  const {status: migrateStatus, error: migrateError, isLoading: migrateLoading} = migration.state as migrateRecordsFail;
  const {records: fieldMapList, isLoading: appLoading, error: appError, status: appStatus} = app.state;
  const {jobList} = job.state;

  const useMigration = migrationHook();

  const error = appError || migrateError;
  const isLoading = appLoading || migrateLoading;
  const status = migrateStatus || appStatus;

  const jobListUi = parseJobListToUi(jobList);
  const isMigrate = isJobValidMigrate(jobList);
    
  return (
    <div className="wrap-migrate-records">
      <ModalStatus error={error} isLoading={isLoading} status={status} />
      <Table headerList={['Stt', 'job title', 'Action']} rowList={jobListUi} />
      {jobList.map((job, key) => {
        const {migrateInfo}= job;
        migrateInfo.fields= migrateInfo.fields as string;
        return (
          <React.Fragment key={key}>
            <ModalMigrate
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

      {isMigrate && (
        <Button
          label={'Migrate Records'}
          onClick={() => {
            // let fieldMapFromTo = parseFieldMapFromTo(fieldMapList);
            // let migrateRecordsValue = parseDataMigrateRecords({
            //   fromApp,
            //   fromDomain,
            //   toApp,
            //   toDomain,
            //   tokenAppFrom,
            //   tokenAppTo,
            //   query,
            //   fields,
            //   fieldMapFromTo,
            // });
            // request('RECORDS', migrateRecordsValue, useMigration);
          }}
        />
      )}
    </div>
  );
};

export default MigrateAllRecord;
