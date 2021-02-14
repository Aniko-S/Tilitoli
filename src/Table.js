import React, { useState } from 'react';
import Button from './Button';

const numberList = ['1', '2', '3', '4', '5', '6','7', '8', ''];
const buttons = [
  {x: 0, y:0, button:<Button id='1' text={numberList[0]} />},
  {x: 0, y:1, button:<Button id='2' text={numberList[1]} />},
  {x: 0, y:2, button:<Button id='3' text={numberList[2]} />},
  {x: 1, y:0, button:<Button id='4' text={numberList[3]} />},
  {x: 1, y:1, button:<Button id='5' text={numberList[4]} />},
  {x: 1, y:2, button:<Button id='6' text={numberList[5]} />},
  {x: 2, y:0, button:<Button id='7' text={numberList[6]} />},
  {x: 2, y:1, button:<Button id='8' text={numberList[7]} />},
  {x: 2, y:2, button:<Button id='9' text={numberList[8]} />}
];

const field = [['', '', ''], ['', '', ''], ['', '', '']];

for (let i = 0; i < buttons.length; i++) {
  const x = buttons[i].x;
  const y = buttons[i].y;
  field[x][y] = buttons[i].button;
}

function Table() {
  
  const [buttonList, setButtonList] = useState(buttons);

  return (
    <div className='container'>
      <table>
        <tr>
          <td>{field[0][0]}</td>
          <td>{field[0][1]}</td>
          <td>{field[0][2]}</td>
        </tr>
        <tr>
          <td>{field[1][0]}</td>
          <td>{field[1][1]}</td>
          <td>{field[1][2]}</td>
        </tr>
        <tr>
          <td>{field[2][0]}</td>
          <td>{field[2][1]}</td>
          <td>{field[2][2]}</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
