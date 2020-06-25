import React, {useReducer} from 'react';

import electronReducer from './reducer/electronService';
import authReducer from './reducer/Auth';
import appRecuder from './reducer/App';

import {authValue} from './reducer/Auth/defaultData';
import {migrationValue} from './reducer/electronService/defaultData';
import {defaulFormField} from './reducer/App/defautData';
import {jobValue} from './reducer/job/defaultData';
import jobReducer from './reducer/job';
import logReducer from './reducer/log'
import {logValue} from './reducer/log/defaultData'
const context = React.createContext<Partial<ContextProps>>({});
const Provider = (props: JSX.ElementChildrenAttribute) => {
  const [elState, elDispatch] = useReducer(electronReducer, migrationValue);
  // const [authState, authDispatch] = useReducer(authReducer, authValue);
  const [appState, appDispatch] = useReducer(appRecuder, defaulFormField);

  const [jobState, jobDispatch] = useReducer(jobReducer, jobValue);
  const [logState, logDispatch] = useReducer(logReducer, logValue);

  const combine = {
    app: {
      state: appState,
      dispatch: appDispatch,
    },
    migration: {
      state: elState,
      dispatch: elDispatch,
    },
    job: {
      state: jobState,
      dispatch: jobDispatch,
    },
    log:{
      state:logState,
      dispatch:logDispatch
    }
  };
  return <context.Provider value={combine}>{props.children}</context.Provider>;
};

export {context};
export default Provider;
