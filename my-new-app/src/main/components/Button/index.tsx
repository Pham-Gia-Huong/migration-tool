import React from 'react';
import './index.css';
const Button = ({label, onClick, disabled}: {disabled?: boolean; label: string; onClick: () => void}) => {
  const disableStyle: React.CSSProperties = disabled
    ? {
        opacity: '0.5',
        pointerEvents: 'none',
      }
    : {opacity: '1', pointerEvents: 'initial'};
  return (
    <div className="button" onClick={onClick} style={disableStyle}>
      {label}
    </div>
  );
};

export default Button;
