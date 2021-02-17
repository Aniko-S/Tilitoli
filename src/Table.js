import React, { useState } from 'react';
import Button from './Button';
import InitializeField from './InitializeField';

const searchEmptyField = (field) => {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      if (field[i][j].text === '') {
        console.log(i, ', ', j);
        return { i, j };
      }
    }
  }
}

function Table() {
  const field = InitializeField();
  
  return (
    <div className='container'>
      <table>
        <tr>
          <td><Button onClick={() => searchEmptyField(field)}>{field[0][0].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(field)}>{field[0][1].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(field)}>{field[0][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={() => searchEmptyField(field)}>{field[1][0].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(field)}>{field[1][1].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(field)}>{field[1][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={() => searchEmptyField(field)}>{field[2][0].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(field)}>{field[2][1].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(field)}>{field[2][2].text}</Button></td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
