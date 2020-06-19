import React from 'react';
import { Route, HashRouter} from 'react-router-dom';
import LeftSide from '../views/Left';
import MigrateRecord from '../views/MigrateRecord';

export default () => {
  return (
    <HashRouter>
      <Route path="/" component={LeftSide} />
      <Route path="/migrateConfig" component={MigrateRecord} />
    </HashRouter>
  );
};
