import React from 'react';
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Item} from './type';

const ItemList = ({listItem, onClick}: {onClick?: (index:number,item:Item) => void; listItem: Item[]}) => {
  return (
    <React.Fragment>
      {listItem.map((item, key) => {  
        return (
          <div className={`sidebar-item ${item.selected ? "selected" :""}`} key={key} onClick={()=> {
            onClick(key, item);           
          }}>
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

const Sidebar = ({listItem, onClick}: {onClick?: (index:number,item:Item) => void; listItem: Item[]}) => {
  return (
    <div className="sidebar">
      <ItemList listItem={listItem} onClick={(key,item)=> onClick(key,item)} />
    </div>
  );
};

export default Sidebar;
