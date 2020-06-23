import {MIGRATE_RECORDS_SUCCESS, MIGRATE_RECORDS_ERROR} from './actionType';
import {REQUEST,CLEAR_ERROR} from '../base/actionType';
export default (state: StateMigrate, action: ActionMigrate) => {
  switch (action.type) {
    case REQUEST: {
      let newAction = action.data as migrateRecordsSuccess;
      let status = newAction.status;
      let records = newAction.records;
      let isLoading = newAction.isLoading;
      return {...state, status, records, isLoading};
    }
    case MIGRATE_RECORDS_SUCCESS: {
      let newAction = action.data as migrateRecordsSuccess;
      let status = newAction.status;
      let records = newAction.records;
      let isLoading = newAction.isLoading;
      return {...state, status, records, isLoading};
    }
    case MIGRATE_RECORDS_ERROR: {
      let newAction = action.data as migrateRecordsFail;
      let status = newAction.status;
      let error = newAction.error;
      let isLoading = newAction.isLoading;
      return {...state, status, error, isLoading};
    }
    case CLEAR_ERROR: {
      let status = '';
      return {...state, status};
    }
    default:
      return state;
  }
};
