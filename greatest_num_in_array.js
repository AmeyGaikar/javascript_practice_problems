function largestNum(numArr) {
    let largestNum = 1;

    for (i = 0; i <= numArr.length - 1; i++) {
        if (numArr[i] > largestNum) {
            largestNum = numArr[i];
        }
    }

    return largestNum;
}

console.log(largestNum([0, 100, 4]));