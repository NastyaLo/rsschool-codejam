module.exports = function sumOfOther(inputArray) {
    let resultArray = [];

    for(let i = 0; i < inputArray.length; i++) {
        let sumOfRemaining = 0;

        inputArray.forEach((element, index) => {
            if(index != i) sumOfRemaining += element;
        });

        resultArray.push(sumOfRemaining);
    };

    return resultArray;
};