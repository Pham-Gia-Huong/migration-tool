import React from 'react'
import InputField from "../../../components/Input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const FormInput = ({
  name,
  title,
  domain,
  app,
  token,
  setDomain,
  setApp,
  setToken,
}: {
  name: string;
  title: string;
  domain: string;
  app: number;
  token: string;
  setDomain: (value: any) => void;
  setApp: (value: number) => void;
  setToken: (value: string) => void;
}) => {
  return (
    <div className="from-form" title={title}>
      <div className="from-form-title">{name}</div>
      <div className="from-form-input">
        <InputField type={'text'} label={'From Domain'} defaultValue={domain} onChange={(value: string) => setDomain(value)} />
        <InputField type={'number'} label={'From App'} defaultValue={app} onChange={(value: number) => setApp(value)} />
        <InputField type={'text'} label={'Token App From'} defaultValue={token} onChange={(value: string) => setToken(value)} />
      </div>
      <div className="from-form-expland">
        <div className="from-form-expland-title">Expand</div>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
};

export default FormInput;