import React from 'react';
import InputField from '../../../components/Input/Input';

const FormFromInput = ({
  domain,
  app,
  token,
  setDomain,
  setApp,
  setToken,
}: FormFromInput) => {
  return (
    <React.Fragment>
      <InputField type={'text'} label={'From Domain'} defaultValue={domain} onChange={(value: string) => setDomain(value)} />
      <InputField type={'number'} label={'From App'} defaultValue={app} onChange={(value: number) => setApp(value)} />
      <InputField type={'text'} label={'Token App From'} defaultValue={token} onChange={(value: string) => setToken(value)} />
    </React.Fragment>
  );
};

export default FormFromInput;
