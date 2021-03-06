import React, { useState } from "react";
import Button from "./Button";
import initializeMap from "./InitializeMap";
import targetMap from "./targetMap";
import PopUp from "./PopUp";

function Table({ setRun, setNumber, number }) {
  const [map, setMap] = useState(() => initializeMap());
  const [solved, setSolved] = useState(false);

  const step = (clickedField) => {
    const emptyField = searchEmptyField(map);
    if (canStep(clickedField, emptyField)) {
      changeFields(clickedField, emptyField);
    }
    isSolved();
  };

  const searchEmptyField = () => {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (map[i][j].text === "") {
          return map[i][j];
        }
      }
    }
  };

  const canStep = (clickedField, emptyField) => {
    if (
      Math.abs(clickedField.x - emptyField.x) === 1 &&
      clickedField.y === emptyField.y
    ) {
      return true;
    }
    if (
      Math.abs(clickedField.y - emptyField.y) === 1 &&
      clickedField.x === emptyField.x
    ) {
      return true;
    }
    return false;
  };

  const changeFields = (fieldA, fieldB) => {
    const tempMap = [[...map[0]], [...map[1]], [...map[2]]];
    const tempText = fieldA.text;
    tempMap[fieldA.x][fieldA.y].text = fieldB.text;
    tempMap[fieldB.x][fieldB.y].text = tempText;
    setMap(() => tempMap);
  };

  const isSolved = () => {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j].text !== targetMap[i][j]) {
          return;
        }
      }
    }
    setSolved(true);
    setRun(false);
  };

  return (
    <>
      <div className="container">
        {solved && (
          <PopUp
            number={number}
            onClick={() => {
              setSolved(false);
              setMap(() => initializeMap());
              setNumber(0);
              setRun(true);
            }}
          />
        )}
        <table>
          <tr className="col">
            <td>
              <Button onClick={() => step(map[0][0])}>{map[0][0].text}</Button>
            </td>
            <td>
              <Button onClick={() => step(map[0][1])}>{map[0][1].text}</Button>
            </td>
            <td>
              <Button onClick={() => step(map[0][2])}>{map[0][2].text}</Button>
            </td>
          </tr>
          <tr className="col">
            <td>
              <Button onClick={() => step(map[1][0])}>{map[1][0].text}</Button>
            </td>
            <td>
              <Button onClick={() => step(map[1][1])}>{map[1][1].text}</Button>
            </td>
            <td>
              <Button onClick={() => step(map[1][2])}>{map[1][2].text}</Button>
            </td>
          </tr>
          <tr className="col">
            <td>
              <Button onClick={() => step(map[2][0])}>{map[2][0].text}</Button>
            </td>
            <td>
              <Button onClick={() => step(map[2][1])}>{map[2][1].text}</Button>
            </td>
            <td>
              <Button onClick={() => step(map[2][2])}>{map[2][2].text}</Button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Table;
