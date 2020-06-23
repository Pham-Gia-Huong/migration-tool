import React from 'react';
import FromFormInput from '../FormFromInput';
import {ListFieldMap} from '../FieldMap';
import './index.css';

const FormToMigrate = ({name, title, domain, app, token, setDomain, setApp, setToken, fieldList}: FormToMigrate) => {
  return (
    <div className="from-form" title={title}>
      <div className="from-form-title">{name}</div>
      <div className="from-form-input">
        <FromFormInput domain={domain} app={app} token={token} setDomain={setDomain} setApp={setApp} setToken={setToken} />
        <ListFieldMap showIcon={false} indexListString={'fieldCodeToList'} field={'to'} />
      </div>
    </div>
  );
};

export default FormToMigrate;
