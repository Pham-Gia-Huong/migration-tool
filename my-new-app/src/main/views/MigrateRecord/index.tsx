import React, {useState, useContext} from 'react';
import './index.css';
import Button from '../../components/Button';
import {parseDataMigrateRecords} from '../../features/migration';
import {context} from '../../context';
import {request} from '../../service';
import migrationHook from '../../hooks/migrateHook';
import ModalStatus from './ModalMigrateStatus';
import ContainerForm from './ContainerForm';

const MigrateAllRecord = () => {
  const [toDomain, setToDomain] = useState('');
  const [fromDomain, setFromDomain] = useState('');
  const [fromApp, setFromApp] = useState(0);
  const [tokenAppFrom, setTokenAppFrom] = useState('');
  const [toApp, setToApp] = useState(0);
  const [tokenAppTo, setTokenAppTo] = useState('');
  const {migration} = useContext(context);
  const useMigration = migrationHook();
  const stateError = migration.state as migrateRecordsFail;

  return (
    <div className="wrap-migrate-records">
      <ModalStatus error={stateError.error} isLoading={stateError.isLoading} status={stateError.status} />
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
      />
      <Button
        label={'Migrate Records'}
        onClick={() => {
          let migrateRecordsValue = parseDataMigrateRecords({
            fromApp,
            fromDomain,
            toApp,
            toDomain,
            tokenAppFrom,
            tokenAppTo,
            type: 'RECORDS',
          });          
          request('migrate', migrateRecordsValue, useMigration);
        }}
      />
    </div>
  );
};

export default MigrateAllRecord;
