import React from 'react';

const Button = ({label, onClick}: {label: string; onClick: () => void}) => {
  return (
    <div className="button">
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default Button;
