import initialValues from "./initialValues";

const baseMap = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const numberList = initialValues();

const objectList = [
  { x: 0, y: 0, text: numberList[0] },
  { x: 0, y: 1, text: numberList[1] },
  { x: 0, y: 2, text: numberList[2] },
  { x: 1, y: 0, text: numberList[3] },
  { x: 1, y: 1, text: numberList[4] },
  { x: 1, y: 2, text: numberList[5] },
  { x: 2, y: 0, text: numberList[6] },
  { x: 2, y: 1, text: numberList[7] },
  { x: 2, y: 2, text: numberList[8] },
];

for (let i = 0; i < objectList.length; i++) {
  const x = objectList[i].x;
  const y = objectList[i].y;
  baseMap[x][y] = objectList[i];
}

export default baseMap;
