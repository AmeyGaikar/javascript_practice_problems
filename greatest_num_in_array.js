function largestNum(numArr) {
 let largestNum = numArr[0];

    numArr.forEach(num => {
        if(num > largestNum){
            largestNum = num;
        }
    });
}

console.log(largestNum([1,2,3,4,5,6,7,8,9]));