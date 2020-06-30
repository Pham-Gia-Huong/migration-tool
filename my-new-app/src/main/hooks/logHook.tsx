import {useContext} from 'react';
import {context} from '../context';
import * as actionCreator from '../context/reducer/log/action';
export default () => {
  const {log} = useContext(context);
  const logDispatch = log.dispatch;
  return {
    saveLog: (listLog: Log[]) => logDispatch(actionCreator.saveLog(listLog)),
  };
};
