import React, {useState} from 'react';
import InputField from '../../components/Input';
import Button from '../../components/Button';
import {setInfoUser, isExistInfoUser} from '../../features/login';

import './index.css';

const Login = () => {
  const [domain, setDomain] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isExistUser, setIsExistUser] = useState(isExistInfoUser());

  return (
    <div className="login">
      <div className="form-login">
        <InputField type={'string'} label="domain" defaultValue={domain} onChange={(value) => setDomain(value as string)} />
        <InputField type={'string'} label="username" defaultValue={username} onChange={(value) => setUsername(value as string)} />
        <InputField type={'string'} label="password" defaultValue={password} onChange={(value) => setPassword(value as string)} />
        <Button
          label={isExistUser ? 'Add' : 'Create'}
          onClick={() => {
            // let login = {
            //   domain,
            //   auth: btoa(`${username}:${password}`),
            // };
            setInfoUser({domain, username, password});
            setIsExistUser(isExistInfoUser());
          }}
        />
      </div>
    </div>
  );
};

export default Login;
