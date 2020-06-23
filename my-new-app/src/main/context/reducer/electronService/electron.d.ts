interface migrateRecordsSuccess {
  status: string;
  records: any;
  isLoading?: boolean;
}

interface migrateRecordsFail {
  status: string;
  error: string;
  isLoading?: boolean;
}

interface migrateRecordsAction {
  type:
    | typeof import('../base/actionType').REQUEST
    | typeof import('./actionType').MIGRATE_RECORDS_SUCCESS
    | typeof import('./actionType').MIGRATE_RECORDS_ERROR
    | typeof import('../base/actionType').CLEAR_ERROR;
  data?: migrateRecordsFail | migrateRecordsSuccess;
}

declare type StateMigrate = migrateRecordsFail | migrateRecordsSuccess;
declare type ActionMigrate = migrateRecordsAction;
