import * as actionCreator from './actionType';

const migrateRecordsRequest = (): migrateRecordsAction => {
  return {
    type: actionCreator.MIGRATE_RECORDS_REQUEST,
    data: {
      status: "",
      records: null,
      isLoading: true,
    },
  };
};

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

export {migrateRecordsRequest,migrateRecordsSuccess,migrateRecordsFail};
