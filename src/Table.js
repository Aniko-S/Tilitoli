import React from 'react';
import Button from './Button';
import InitializeMap from './InitializeMap';

const searchEmptyField = (field) => {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      if (field[i][j].text === '') {
        console.log(i, ', ', j);
        return { i, j };
      }
const searchEmptyField = (map) => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j].text === '') {
        return map[i][j];
      }
    }
  }
}

function Table() {
  const map = InitializeMap();
  
  return (
    <div className='container'>
      <table>
        <tr>
          <td><Button onClick={() => searchEmptyField(map)}>{map[0][0].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(map)}>{map[0][1].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(map)}>{map[0][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={() => searchEmptyField(map)}>{map[1][0].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(map)}>{map[1][1].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(map)}>{map[1][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={() => searchEmptyField(map)}>{map[2][0].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(map)}>{map[2][1].text}</Button></td>
          <td><Button onClick={() => searchEmptyField(map)}>{map[2][2].text}</Button></td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
