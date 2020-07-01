import React, {useContext, useState} from 'react';
import './index.css';
import Sidebar from '../../components/Sidebar';
import {faWrench, faUserCog, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {navigationToPage, detectSeleted} from '../../features/left';
import appHook from '../../hooks/appHook';
import migrateHook from '../../hooks/migrateHook';



const LeftSide = ({history}: {history?: any}) => {
  const useApp = appHook();
  const useMigrate = migrateHook();
  const {location} = history;

  const [listItem, setListItem] = useState([
    {name: 'Login', icon: faUserCog, selected: location.pathname === '/login', pathName: '/login'},
    {name: 'Setting', icon: faWrench, selected: location.pathname === '/migrateConfig', pathName: '/migrateConfig'},
    {name: 'test', icon: faWrench, selected: location.pathname === '/test', pathName: '/test'},
  ]as ItemSidebar[]);

  return (
    <div className="left-side">
      <Sidebar
        onClick={(key: number, item: any) => {
          navigationToPage(key, item, history);
          let listSelected = detectSeleted(listItem, history.location.pathname);
          setListItem(listSelected);
          useApp.clearError();
          useMigrate.clearError();
        }}
        listItem={listItem}
      />
    </div>
  );
};

export default LeftSide;
