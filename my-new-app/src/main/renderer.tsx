import React from 'react';
import './index.css';
import Provider from './context';
import Router from './routes';

const App = () => {
  return (
    <Provider>
      <div className="container-main">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
