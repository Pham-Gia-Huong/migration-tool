import React from 'react';
import './index.css'
const Button = ({label, onClick}: {label: string; onClick: () => void}) => {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
