const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

const numberList = [...numbers];

const shuffleNumberList = () => {
  for (let i = numberList.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numberList[i], numberList[j]] = [numberList[j], numberList[i]];
  }
  if (!isValid()) {
    console.log("change");
    changeNotEmptyLastTwo();
  }
};

const isValid = () => {
  let count = 0;
  for (let i = 0; i < numberList.length - 2; i++) {
    for (let j = i + 1; j < numberList.length - 1; j++) {
      if (numberList[i] > numberList[j]) {
        count++;
      }
    }
  }
  console.log(count);
  return count % 2 === 0;
};

const changeNotEmptyLastTwo = () => {
  const lastNotEmptyIndex = numberList.length - 2;
  const lastNotEmptyElement = numberList[lastNotEmptyIndex];
  numberList[lastNotEmptyIndex] = numberList[lastNotEmptyIndex - 1];
  numberList[lastNotEmptyIndex - 1] = lastNotEmptyElement;
};

function initialValues() {
  shuffleNumberList();
  return numberList;
}

export default initialValues;
