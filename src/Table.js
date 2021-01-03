import React from 'react';
import Button from './Button';

function Table() {
  return (
    <div className='container'>
      <table>
        <tr>
          <td><Button text='1' /></td>
          <td><Button text='2' /></td>
          <td><Button text='3' /></td>
        </tr>
        <tr>
          <td><Button text='4' /></td>
          <td><Button text='5' /></td>
          <td><Button text='6' /></td>
        </tr>
        <tr>
          <td><Button text='7' /></td>
          <td><Button text='8' /></td>
          <td><Button text='9' /></td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
