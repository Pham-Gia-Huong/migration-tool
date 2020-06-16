import React from 'react';
import Provider from './context';
import MigrateAllRecord from './views/MigrateAllRecords';
const App = () => {
  return (
    <Provider>
      <MigrateAllRecord />
    </Provider>
  );
};

export default App;
