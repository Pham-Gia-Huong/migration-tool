interface MigrateHook {
  request: () => void;
    RecordsSuccess: (data: migrateRecordsSuccess) => void;
    RecordsFail: (data: migrateRecordsFail) => void;
    getFormSuccess: (data: migrateRecordsSuccess) => void;
    getFormFail: (data: migrateRecordsFail) => void;
    clearError: () => void;
}