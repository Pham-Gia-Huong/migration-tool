import React, {useState, useContext, useEffect} from 'react';
import InputField from '../components/Input/Input';
import Button from '../components/Button';
import {parseDataMigrateRecords, isLoadMigrateRecords} from '../features/migration';
import {context} from '../context';
import {request} from '../service';
import migrationHook from '../hooks/migrateHook';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';
const MigrateAllRecord = () => {
  const [fromDomain, setFromDomain] = useState('');
  const [toDomain, setToDomain] = useState('');
  const [fromApp, setFromApp] = useState(0);
  const [toApp, setToApp] = useState(0);
  const [tokenAppFrom, setTokenAppFrom] = useState('');
  const [tokenAppTo, setTokenAppTo] = useState('');
  const {migration} = useContext(context);
  const [isLoading, setIsLoading] = useState(isLoadMigrateRecords(migration.state.status));

  const useMigration = migrationHook();
  console.log("render",migration.state);
  
  // useEffect(() => {
  //   setIsLoading(isLoadMigrateRecords(migration.state.status));

  // }, [migration.state.status]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
       ""
      )}
      <InputField type={'text'} label={'From Domain'} defaultValue={fromDomain} onChange={(value: string) => setFromDomain(value)} />
      <InputField type={'text'} label={'To Domain'} defaultValue={toDomain} onChange={(value: string) => setToDomain(value)} />
      <InputField type={'number'} label={'From App'} defaultValue={fromApp} onChange={(value: number) => setFromApp(value)} />
      <InputField type={'number'} label={'To App'} defaultValue={toApp} onChange={(value: number) => setToApp(value)} />
      <InputField type={'text'} label={'Token App From'} defaultValue={tokenAppFrom} onChange={(value: string) => setTokenAppFrom(value)} />
      <InputField type={'text'} label={'Token App To'} defaultValue={tokenAppTo} onChange={(value: string) => setTokenAppTo(value)} />
      <Button
        label={'Migrate All Record'}
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
          useMigration.migrateRecords(null)
          // request('migrate', migrateRecordsValue, useMigration.migrateRecords);
          // setIsLoading(isLoadMigrateRecords('loading'));
        }}
      />
    </div>
  );
};

export default MigrateAllRecord;
