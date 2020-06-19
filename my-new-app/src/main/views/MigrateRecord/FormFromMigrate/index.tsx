import React from 'react';
import InputField from '../../../components/Input/Input';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import FromFormInput from '../FormFromInput';
import './index.css';
import FormFilter from '../FormFilter';

const FormInput = ({
  name,
  title,
  domain,
  app,
  token,
  setDomain,
  setApp,
  setToken,
  setQuery,
  setFields,
  query,
  fields,
}: {
  name: string;
  title: string;
  domain: string;
  app: number;
  token: string;
  setDomain: (value: any) => void;
  setApp: (value: number) => void;
  setToken: (value: string) => void;
  query?: string;
  fields?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  setFields?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="from-form" title={title}>
      <div className="from-form-title">{name}</div>
      <div className="from-form-input">
        <FromFormInput domain={domain} app={app} token={token} setDomain={setDomain} setApp={setApp} setToken={setToken} />
        <FormFilter query={query} setQuery={setQuery} fields={fields} setFields={setFields} />
      </div>
      {/* <div className="from-form-expland">
        <div className="from-form-expland-title">Expand</div>
        <FontAwesomeIcon icon={faCaretDown} />
      </div> */}
    </div>
  );
};

export default FormInput;
