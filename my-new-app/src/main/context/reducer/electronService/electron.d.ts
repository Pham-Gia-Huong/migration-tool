interface migrateRecordsSuccess {
  status: string;
  records: any;
  isLoading: boolean;
}

interface migrateRecordsFail {
  status: string;
  error: any;
  isLoading: boolean;
}

interface migrateRecordsAction {
  type:
    | typeof import('./actionType').MIGRATE_RECORDS_REQUEST
    | typeof import('./actionType').MIGRATE_RECORDS_SUCCESS
    | typeof import('./actionType').MIGRATE_RECORDS_ERROR;
  data: migrateRecordsSuccess | migrateRecordsFail;
}

declare type StateMigrate = migrateRecordsSuccess | migrateRecordsFail;
declare type ActionMigrate = migrateRecordsAction;
