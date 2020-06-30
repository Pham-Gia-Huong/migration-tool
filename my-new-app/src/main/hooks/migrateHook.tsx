import * as migrationAction from '../context/reducer/electronService/action';
import * as baseAction from '../context/reducer/base/action';
import {context} from '../context';
import {useContext} from 'react';

export default () => {
  const {migration} = useContext(context);
  let dispatch = migration.dispatch;
  return {
    request: () => dispatch(baseAction.request()),

    RecordsSuccess: (data: migrateRecordsSuccess) => dispatch(migrationAction.migrateRecordsSuccess(data)),
    RecordsFail: (data: migrateRecordsFail) => dispatch(migrationAction.migrateRecordsFail(data)),

    getFormSuccess: (data: migrateRecordsSuccess) => dispatch(migrationAction.migrateRecordsSuccess(data)),
    getFormFail: (data: migrateRecordsFail) => dispatch(migrationAction.migrateRecordsFail(data)),

    clearError:()=> dispatch(baseAction.clearError())
  } as MigrateHook;
};
