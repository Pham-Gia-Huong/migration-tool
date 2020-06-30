import React from 'react';
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import FormFromMigrate from '../FormFromMigrate';
import FormToMigrate from '../FormToMigrate';

const ContainerForm = ({
  fromDomain,
  fromApp,
  tokenAppFrom,
  setFromDomain,
  setTokenAppFrom,
  setFromApp,
  toDomain,
  toApp,
  tokenAppTo,
  setToDomain,
  setToApp,
  setTokenAppTo,
  setQuery,
  setFields,
  query,
  fields,
}: ContainerForm) => {
  
  return (
    <div className="wrap-from">
      <FormFromMigrate
        title={'get'}
        name={'Get App'}
        domain={fromDomain}
        app={fromApp}
        token={tokenAppFrom}
        setDomain={setFromDomain}
        setToken={setTokenAppFrom}
        setApp={setFromApp}
        query={query}
        setQuery={setQuery}
        fields={fields}
        setFields={setFields}
      />
      <div className="wrap-from-arrow">
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
      <FormToMigrate
        title={'set'}
        name={'Set App'}
        domain={toDomain}
        app={toApp}
        token={tokenAppTo}
        setDomain={setToDomain}
        setApp={setToApp}
        setToken={setTokenAppTo}
      />
      {/* <ContainerAdd /> */}
    </div>
  );
};

export default ContainerForm;
