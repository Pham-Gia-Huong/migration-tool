interface ContextProps {
  app: {
    state: StateApp;
    dispatch: React.Dispatch<ActionApp>;
  };
  migration: {
    state: StateMigrate;
    dispatch: React.Dispatch<ActionMigrate>;
  };
  // app: {
  //   state: StateMigrate;
  //   dispatch: React.Dispatch<ActionMigrate>;
  // };
}
