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
}: {
  fromDomain: string;
  fromApp: number;
  tokenAppFrom: string;
  toDomain: string;
  toApp: number;
  tokenAppTo: string;
  setToDomain: React.Dispatch<React.SetStateAction<string>>;
  setToApp: React.Dispatch<React.SetStateAction<number>>;
  setTokenAppTo: React.Dispatch<React.SetStateAction<string>>;
  setFromDomain: React.Dispatch<React.SetStateAction<string>>;
  setTokenAppFrom: React.Dispatch<React.SetStateAction<string>>;
  setFromApp: React.Dispatch<React.SetStateAction<number>>;
  query?: string;
  fields?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  setFields?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const hoverContainer = () => {
    let parentNode = document.getElementsByClassName('wrap-from')[0] as HTMLElement;
    parentNode.style.border = '2px solid #34242454';
  };
  const removeHoverContainer = () => {
    let parentNode = document.getElementsByClassName('wrap-from')[0] as HTMLElement;
    parentNode.style.border = 'none';
  };
  const ContainerAdd = () => {
    return (
      <div className="wrap-from-add">
        <div className="wrap-from-add-hover" onMouseOver={hoverContainer} onMouseOut={removeHoverContainer}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </div>
    );
  };
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
      <ContainerAdd />
    </div>
  );
};

export default ContainerForm;
