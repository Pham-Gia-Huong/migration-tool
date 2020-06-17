import React, {useReducer} from 'react';
import electronReducer from './reducer/electronService';
import {migrationValue} from './reducer/electronService/defaultData'

const context = React.createContext<Partial<ContextProps>>({});
const Provider = (props:JSX.ElementChildrenAttribute) => {
  const [elState, elDispatch] = useReducer(electronReducer, migrationValue);
  const combine = {
    migration: {
      state: elState,
      dispatch: elDispatch,
    },
  };
  return <context.Provider value={combine}>{props.children}</context.Provider>;
};

export {context}
export default Provider;
