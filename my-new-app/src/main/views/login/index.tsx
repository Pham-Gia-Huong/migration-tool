import React, {useState} from 'react';
import InputField from '../../components/Input';
import Button from '../../components/Button';
import authHook from '../../hooks/authHook';
import './index.css';
const Login = () => {
  const [domain, setDomain] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const useAuth = authHook();

  return (
    <div className="login">
      <div className="form-login">
        <InputField type={'string'} label="domain" defaultValue={domain} onChange={(value) => setDomain(value as string)} />
        <InputField type={'string'} label="username" defaultValue={username} onChange={(value) => setUsername(value as string)} />
        <InputField type={'string'} label="password" defaultValue={password} onChange={(value) => setPassword(value as string)} />
        <Button
          label={'Submid'}
          onClick={() => {
            let login = {
              domain,
              auth: btoa(`${username}:${password}`),
            };
            // useAuth.login(login);
          }}
        />
      </div>
    </div>
  );
};

export default Login;
