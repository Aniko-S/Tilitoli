import React from 'react';

function Button({ text, onClick }) {
  if (text) {
    return <button className='numberButton' onClick={onClick}>{text}</button>;
  } else {
    return '';
  }
}

export default Button;
