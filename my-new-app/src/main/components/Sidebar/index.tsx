import React from 'react';
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Item} from './type';

const ItemList = ({listItem, onClick}: {onClick?: (item:Item) => void; listItem: Item[]}) => {
  return (
    <React.Fragment>
      {listItem.map((item, key) => {
        return (
          <div className="sidebar-item" key={key} onClick={(item)=> onClick(item)}>
            <div className="sidebar-item-icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="sidebar-item-name">{item.name}</div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

const Sidebar = ({listItem, onClick}: {onClick?: (item:Item) => void; listItem: Item[]}) => {
  return (
    <div className="sidebar">
      <ItemList listItem={listItem} onClick={(item)=> onClick(item)} />
    </div>
  );
};

export default Sidebar;
