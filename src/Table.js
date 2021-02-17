import React, { useState } from 'react';
import Button from './Button';
import InitializeMap from './InitializeMap';



function Table() {
  const baseMap = InitializeMap();
  const [map, setMap] = useState(baseMap);

  const step = (clickedField) => {
    const emptyField = searchEmptyField(map);
    if (canStep(clickedField, emptyField)) {
      changeFields(clickedField, emptyField);
    }
  }

  const searchEmptyField = () => {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (map[i][j].text === '') {
          return map[i][j];
        }
      }
    }
  }

  const canStep = (clickedField, emptyField) => {
    if (Math.abs(clickedField.x - emptyField.x) === 1 && clickedField.y === emptyField.y) {
      return true;
    }
    if (Math.abs(clickedField.y - emptyField.y) === 1 && clickedField.x === emptyField.x) {
      return true;
    }
    return false;
  }

  const changeFields = (fieldA, fieldB) => {
    const tempMap = [[...map[0]], [...map[1]], [...map[2]]];
    const tempText = fieldA.text;
    tempMap[fieldA.x][fieldA.y].text = fieldB.text;
    tempMap[fieldB.x][fieldB.y].text = tempText;
    setMap(() => tempMap);
  }

  return (
    <div className='container'>
      <table>
        <tr>
          <td><Button onClick={() => step(map[0][0])}>{map[0][0].text}</Button></td>
          <td><Button onClick={() => step(map[0][1])}>{map[0][1].text}</Button></td>
          <td><Button onClick={() => step(map[0][2])}>{map[0][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={() => step(map[1][0])}>{map[1][0].text}</Button></td>
          <td><Button onClick={() => step(map[1][1])}>{map[1][1].text}</Button></td>
          <td><Button onClick={() => step(map[1][2])}>{map[1][2].text}</Button></td>
        </tr>
        <tr>
          <td><Button onClick={() => step(map[2][0])}>{map[2][0].text}</Button></td>
          <td><Button onClick={() => step(map[2][1])}>{map[2][1].text}</Button></td>
          <td><Button onClick={() => step(map[2][2])}>{map[2][2].text}</Button></td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
