import React from 'react';
import DropdownFieldCode from '../../../components/Dropdown';
import DropdownCondition from '../../../components/Dropdown';
import InputField from '../../../components/Input';
import {hardFieldCodeList} from '../../../features/modalFilter/data';
import './index.css';
const TextFilter = () => {
  return (
    <div className="filter-row">
      <div className="filter-column field-code-filter-text">
        <DropdownFieldCode onClick={() => {}} itemList={hardFieldCodeList} />
      </div>
      <div className="filter-column condition-filter-text">
        <DropdownCondition onClick={() => {}} itemList={hardFieldCodeList} />
      </div>
      <div className="filter-column value-filter-text">
        <InputField type={'text'} onChange={() => {}} />
      </div>
    </div>
  );
};

export default TextFilter;
