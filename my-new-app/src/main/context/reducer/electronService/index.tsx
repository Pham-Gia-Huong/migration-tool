import {MIGRATE_RECORDS_REQUEST, MIGRATE_RECORDS_SUCCESS,MIGRATE_RECORDS_ERROR} from './actionType';

export default (state: StateMigrate, action: ActionMigrate) => {  
  switch (action.type) {
    case MIGRATE_RECORDS_REQUEST: {            
      let newState = JSON.parse(JSON.stringify(state)) as migrateRecordsSuccess;
      let newAction = action.data as migrateRecordsSuccess;
      newState.status = newAction.status;
      newState.records = newAction.records;
      newState.isLoading = newAction.isLoading;
      return newState;
    }
    case MIGRATE_RECORDS_SUCCESS: {
      let newState = JSON.parse(JSON.stringify(state)) as migrateRecordsSuccess;
      let newAction = action.data as migrateRecordsSuccess;
      newState.status = newAction.status;
      newState.records = newAction.records;
      newState.isLoading = newAction.isLoading;
      return newState;
    }
    case MIGRATE_RECORDS_ERROR: {
      let newState = JSON.parse(JSON.stringify(state)) as migrateRecordsFail;
      let newAction = action.data as migrateRecordsFail;
      newState.status = newAction.status;
      newState.error = newAction.error;
      newState.isLoading = newAction.isLoading;
      return newState;
    }
    default:
      return state;
  }
};
