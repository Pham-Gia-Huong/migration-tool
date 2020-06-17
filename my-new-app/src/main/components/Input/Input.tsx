import React from 'react';
import './index.css';
const InputField = ({
  label,
  onChange,
  defaultValue,
  type = 'text',
}: {
  type: string;
  label: string;
  onChange: (value: string | number) => void;
  defaultValue: string | number;
}) => {
  return (
    <div className="input-field">
      <div className="label">{label}</div>
      <input
        type={type}
        value={defaultValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
