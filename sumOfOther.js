module.exports = function sumOfOther(inputArray) {
  const resultArray = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    let sumOfRemaining = 0;

    inputArray.forEach((element, index) => {
      if (index !== i) sumOfRemaining += element;
    });

    resultArray.push(sumOfRemaining);
  }

  return resultArray;
};
