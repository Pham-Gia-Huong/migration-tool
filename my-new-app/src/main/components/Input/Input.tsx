import React, { useState} from 'react';
import './index.css'
const InputField = ({label, onChange,defaultValue}: {label: string; onChange: (value:string) => void,defaultValue:string}) => {

  return (
    <div className="input-field">
      <div className="label">{label}</div>
      <input type="text" value={defaultValue} onChange={(e) => {
        onChange(e.target.value);
      }} />
    </div>
  );
};

export default InputField;
