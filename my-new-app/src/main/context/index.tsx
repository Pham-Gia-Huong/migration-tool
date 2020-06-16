import React, {useReducer} from 'react';
import electronReducer from './reducer/electronService';

const context = React.createContext({});
const Provider = (props) => {
  const [elState, elDispatch] = useReducer(electronReducer, {});
  const combine = {
    electronService: {
      state: elState,
      dispatch: elDispatch,
    },
  };
  return <context.Provider value={combine}>{props.children}</context.Provider>;
};

export {context}
export default Provider;
