import React, {useState} from 'react';
import './index.css';
const ItemList = ({
  itemList,
  onClick,
  style,
  setStyle,
}: {
  style: any;
  setStyle: any;
  onClick: (key: number, item: any) => void;
  itemList: any;
}) => {
  return (
    <div className="dropdown-list" style={style}>
      {itemList.map((item: any, key: any) => {
        return (
          <div
            className="dropdown-item"
            key={key}
            onClick={() => {
              let displayStyle = {display: 'none'};
              onClick(key, item);
              setStyle(displayStyle);
            }}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
const Dropdown = ({itemList, onClick, label = ''}: {label: string; onClick: (key: number, item: any) => void; itemList: any}) => {
  const [style, setStyle] = useState({});
  const [itemState, setItem] = useState(label ? label : itemList[0].label);
  return (
    <div className="dropdown">
      <div
        className="dropdown-text"
        onClick={() => {
          let displayStyle = {display: 'block'};
          setStyle(displayStyle);
        }}
      >
        {itemState}
      </div>

      <ItemList
        itemList={itemList}
        style={style}
        setStyle={setStyle}
        onClick={(key, item) => {
          onClick(key, item);
          setItem(item.label);
        }}
      />
    </div>
  );
};

export default Dropdown;
