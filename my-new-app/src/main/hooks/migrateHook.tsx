import * as migrationAction from '../context/reducer/electronService/action';
import {context} from '../context'
import { useContext } from 'react';
export default () => {
  const {migration} = useContext(context);
  let dispatch = migration.dispatch;
  let state = migration.state;  
  return {
   RecordsRequest:()=>dispatch(migrationAction.migrateRecordsRequest()),
    RecordsSuccess: (data: migrateRecordsSuccess) =>  dispatch(migrationAction.migrateRecordsSuccess(data)),
    RecordsFail: (data: migrateRecordsFail) =>  dispatch(migrationAction.migrateRecordsFail(data))

  };
};
