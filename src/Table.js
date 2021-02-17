import React, { useState } from 'react';
import Button from './Button';


const field = [['', '', ''], ['', '', ''], ['', '', '']];

const searchEmptyField = () => {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      if (field[i][j].text === '') {
        return {i, j};
      }
    }
  }
}

const numberList = ['1', '2', '3', '4', '5', '6', '7', '8', ''];
const objects = [
  { x: 0, y: 0, text: numberList[0] },
  { x: 0, y: 1, text: numberList[1] },
  { x: 0, y: 2, text: numberList[2] },
  { x: 1, y: 0, text: numberList[3] },
  { x: 1, y: 1, text: numberList[4] },
  { x: 1, y: 2, text: numberList[5] },
  { x: 2, y: 0, text: numberList[6] },
  { x: 2, y: 1, text: numberList[7] },
  { x: 2, y: 2, text: numberList[8] }
];


function Table() {
  const [objectList, setObjectList] = useState(objects);


  for (let i = 0; i < objectList.length; i++) {
    const x = objectList[i].x;
    const y = objectList[i].y;
    field[x][y] = objectList[i];
  }

  return (
    <div className='container'>
      <table>
        <tr>
          <td><Button onClick={searchEmptyField}>{field[0][0].text}</Button></td>
          <td><Button onClick={searchEmptyField}>{field[0][1].text}</Button></td>
          <td><Button onClick={searchEmptyField}>{field[0][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={searchEmptyField}>{field[1][0].text}</Button></td>
          <td><Button onClick={searchEmptyField}>{field[1][1].text}</Button></td>
          <td><Button onClick={searchEmptyField}>{field[1][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={searchEmptyField}>{field[2][0].text}</Button></td>
          <td><Button onClick={searchEmptyField}>{field[2][1].text}</Button></td>
          <td><Button onClick={searchEmptyField}>{field[2][2].text}</Button></td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
