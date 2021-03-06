import React from 'react';

import './Button.css';

const Button = ({children, size, inverse, danger, type = "button", onClick, disabled}) => {
  return (
    <button className={`btn btn-${size || 'md'} ${inverse &&
        'btn-inverse'} ${danger && 'btn-danger'}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

export default Button;