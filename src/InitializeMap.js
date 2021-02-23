const baseMap = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

const numberList = [...numbers];

const shuffleNumberList = () => {
  for (let i = numberList.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numberList[i], numberList[j]] = [numberList[j], numberList[i]];
  }
};

const fillMap = () => {
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
};

function InitializeMap() {
  shuffleNumberList();
  fillMap();
  return baseMap;
}

export default InitializeMap;
