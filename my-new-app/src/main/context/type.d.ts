interface ContextProps {
  app: {
    state: StateApp;
    dispatch: React.Dispatch<ActionApp>;
  };
  migration: {
    state: StateMigrate;
    dispatch: React.Dispatch<ActionMigrate>;
  };
  job: {
    state: JobState;
    dispatch: React.Dispatch<JobAction>;
  };
  log: {
    state: LogState;
    dispatch: React.Dispatch<LogAction>;
  };
  
}
