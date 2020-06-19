import React from 'react';
import FromFormInput from '../FormFromInput';
import './index.css';

const FormToMigrate = ({
  name,
  title,
  domain,
  app,
  token,
  setDomain,
  setApp,
  setToken,

}: FormToMigrate) => {
  return (
    <div className="from-form" title={title}>
      <div className="from-form-title">{name}</div>
      <div className="from-form-input">
        <FromFormInput domain={domain} app={app} token={token} setDomain={setDomain} setApp={setApp} setToken={setToken} />
      </div>
      {/* <div className="from-form-expland">
        <div className="from-form-expland-title">Expand</div>
        <FontAwesomeIcon icon={faCaretDown} />
      </div> */}
    </div>
  );
};

export default FormToMigrate;
