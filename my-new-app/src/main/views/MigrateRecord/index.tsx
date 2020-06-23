import React, {useState, useContext} from 'react';
import './index.css';
import Button from '../../components/Button';
import {parseDataMigrateRecords, parseFieldMapFromTo} from '../../features/migration';
import {context} from '../../context';
import {request} from '../../service/index';
import migrationHook from '../../hooks/migrateHook';
import ModalStatus from '../ModalStatus';
import ContainerForm from './ContainerForm';
import {GET_FORM_FIELD} from '../../../electronjs/service/app/type';
import appHook from '../../hooks/appHook';

const MigrateAllRecord = () => {
  const [toDomain, setToDomain] = useState('');
  const [fromDomain, setFromDomain] = useState('');
  const [fromApp, setFromApp] = useState(0);
  const [tokenAppFrom, setTokenAppFrom] = useState('');
  const [toApp, setToApp] = useState(0);
  const [tokenAppTo, setTokenAppTo] = useState('');
  const [query, setQuery] = useState('');
  const [fields, setFields] = useState('');

  const {migration, app} = useContext(context);
  const useApp = appHook();
  const useMigration = migrationHook();
  const {status: migrateStatus, error: migrateError, isLoading: migrateLoading} = migration.state as migrateRecordsFail;
  const {records: fieldMapList, isLoading: appLoading, error: appError, status: appStatus} = app.state;

  const error = appError || migrateError;
  const isLoading = appLoading || migrateLoading;
  const status = migrateStatus || appStatus;
  console.log("error",error);
  console.log("isLoading",isLoading);
  console.log("status",status);

  return (
    <div className="wrap-migrate-records">
      <ModalStatus error={error} isLoading={isLoading} status={status} />
      <ContainerForm
        fromDomain={fromDomain}
        fromApp={fromApp}
        tokenAppFrom={tokenAppFrom}
        setFromDomain={setFromDomain}
        setTokenAppFrom={setTokenAppFrom}
        setFromApp={setFromApp}
        toDomain={toDomain}
        toApp={toApp}
        tokenAppTo={tokenAppTo}
        setToDomain={setToDomain}
        setToApp={setToApp}
        setTokenAppTo={setTokenAppTo}
        query={query}
        setQuery={setQuery}
        fields={fields}
        setFields={setFields}
      />
      {fieldMapList.length === 0 && (
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
      )}
      {fieldMapList.length > 0 && (
        <Button
          label={'Migrate Records'}
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
            });
            request('RECORDS', migrateRecordsValue, useMigration);
          }}
        />
      )}
    </div>
  );
};

export default MigrateAllRecord;
