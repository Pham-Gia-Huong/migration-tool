import React from 'react';
import FromFormInput from '../FormFromInput';
import './index.css';
import FormFilter from '../FormFilter';
import { ListFieldMap } from '../FieldMap';

const FormInput = ({name, title, domain, app, token, setDomain, setApp, setToken, setQuery, setFields, query, fields}: FormFromMigrate) => {
  return (
    <div className="from-form" title={title}>
      <div className="from-form-title">{name}</div>
      <div className="from-form-input">
        <FromFormInput domain={domain} app={app} token={token} setDomain={setDomain} setApp={setApp} setToken={setToken} />
        <ListFieldMap showIcon={true} indexListString={"fieldCodeFromList"} field={"from"}/>
        <FormFilter query={query} setQuery={setQuery} fields={fields} setFields={setFields} />
      </div>
    </div>
  );
};

export default FormInput;
