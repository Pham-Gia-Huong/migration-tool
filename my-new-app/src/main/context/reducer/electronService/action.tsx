import * as actionCreator from './actionType';

const migrateRecordsSuccess = (data: any): migrateRecordsAction => {
  return {
    type: actionCreator.MIGRATE_RECORDS_SUCCESS,
    data: {
      status: data.status,
      records: data.records,
      isLoading: false,
    },
  };
};

const migrateRecordsFail = (data: any): migrateRecordsAction => {
  return {
    type: actionCreator.MIGRATE_RECORDS_ERROR,
    data: {
      status: data.status,
      error: data.error,
      isLoading: false,
    },
  };
};

const getFormRequest = (records: any) => {
  return {
    type: actionCreator.MIGRATE_RECORDS_ERROR,
    data: {
      records,
    },
  };
};

export {migrateRecordsSuccess, migrateRecordsFail, getFormRequest};
