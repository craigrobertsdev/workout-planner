import React from 'react';

const Button = ({ children, buttonType, style, type, click }) => {
  const styles = {
    default: 'text-base p-2 font-medium bg-green-400 mx-2 hover:bg-green-500',
    header: 'bg-white hover:bg-gray-200 px-4 py-3 font-medium',
    exercise: 'bg-gray-100 px-2 py-1 hover:bg-gray-300 block w-full border-b',
    cancel: 'bg-red-500 hover:bg-red-700 font-medium px-4 py-1 w-full',
  };

  return (
    <button
      className={buttonType !== undefined ? styles[buttonType] : styles.default}
      onClick={click}
      style={style}
      type={type}>
      {children}
    </button>
  );
};

export default Button;
