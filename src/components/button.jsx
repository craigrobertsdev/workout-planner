import React from 'react';

const Button = ({ children, type, click, style }) => {
  return (
    <button className={type} onClick={click} style={style}>
      {children}
    </button>
  );
};

export default Button;
