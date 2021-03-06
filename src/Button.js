import React from 'react';

function Button({ onClick, children }) {
  if (children) {
    return <button className='numberButton' onClick={onClick}>{children}</button>;
  } else {
    return '';
  }
}

export default Button;
