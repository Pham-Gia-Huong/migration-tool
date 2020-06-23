import React, {useContext} from 'react';
import DropdownForm from '../../../components/Dropdown';
import {updateFromFieldMapValue, addDataFieldMapList} from '../../../features/app';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import appHook from '../../../hooks/appHook';
import {context} from '../../../context/';
import './index.css';

export const ListFieldMap = ({showIcon, indexListString, field}: {showIcon: boolean; indexListString: string; field: string}) => {
  const {app: AppContext} = useContext(context);
  const {records: fieldMapList} = AppContext.state;

  const useApp = appHook();

  return (
    <React.Fragment>
      {fieldMapList.map((fieldMap,key) => {
        return (
          <div className="field-map-wrapped" key={key}>
            {showIcon && (
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => {
                  let newFileMapList = addDataFieldMapList(fieldMapList);
                  useApp.updateFieldMap(newFileMapList);
                }}
              />
            )}
            <DropdownForm
              itemList={fieldMap[indexListString]}
              onClick={(key, item) => {
                let newFileMapList = updateFromFieldMapValue(fieldMapList, fieldMap.id, item.value, indexListString, field);
                useApp.updateFieldMap(newFileMapList);
              }}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};
