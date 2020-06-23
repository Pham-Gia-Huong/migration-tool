import React, {useContext} from 'react';
import './index.css';
import Sidebar from '../../components/Sidebar';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import {navigationToPage} from '../../features/left';
import appHook from '../../hooks/appHook';
import migrateHook from '../../hooks/migrateHook';

const LeftSide = ({history}: {history?: any}) => {
  const useApp = appHook();
  const useMigrate = migrateHook();
  return (
    <div className="left-side">
      <Sidebar
        onClick={(key: number, item: any) => {
          navigationToPage(key, item, history);
          useApp.clearError();
          useMigrate.clearError();
        }}
        listItem={[
          {name: 'Login', icon: faThumbsUp},
          {name: 'Setting', icon: faThumbsDown},
        ]}
      />
    </div>
  );
};

export default LeftSide;
