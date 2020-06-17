import * as migrationAction from '../context/reducer/electronService/action';
import {context} from '../context'
import { useContext } from 'react';
export default () => {
  const {migration} = useContext(context);
  let dispatch = migration.dispatch;
  let state = migration.state;
  return {
    migrateRecords: (data: migrateRecordsSuccess) => {
      dispatch(migrationAction.migrateRecordsRequest())
      dispatch(migrationAction.migrateRecordsSuccess({status:"hehe",records:[],isLoading:false}))
    },
  };
};
