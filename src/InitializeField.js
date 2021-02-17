import { useState } from 'react';

const field = [['', '', ''], ['', '', ''], ['', '', '']];
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

function InitializeField() {
  const [objectList, setObjectList] = useState(objects);

  for (let i = 0; i < objectList.length; i++) {
    const x = objectList[i].x;
    const y = objectList[i].y;
    field[x][y] = objectList[i];
  }

  return field;
}

export default InitializeField;