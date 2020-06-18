import React from 'react';
import './index.css';
import Provider from './context';
import LeftSide from './views/Left';
import {useRoutes, A} from 'hookrouter';
import {routes} from './routes';

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <Provider>
      <div className="container-main">
        <LeftSide />
        {routeResult}
      </div>
    </Provider>
  );
};

export default App;
