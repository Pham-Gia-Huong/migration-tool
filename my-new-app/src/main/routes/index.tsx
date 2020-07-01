import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import LeftSide from '../views/Left';
import MigrateRecord from '../views/MigrateRecord';
import Login from '../views/login';
import ModalFilter from '../views/ModalFilter';
export default () => {
  return (
    <HashRouter>
      <Route path="/" component={LeftSide} />
      <Route path="/migrateConfig" component={MigrateRecord} />
      <Route path="/login" component={Login} />
      <Route path="/test" component={ModalFilter} />
    </HashRouter>
  );
};
