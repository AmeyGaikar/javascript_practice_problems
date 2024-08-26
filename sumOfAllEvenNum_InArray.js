function evenNumSum(arr) {
//creating an empty varible and initializing it with 0 so that js can know it is an integer variable.
    let sumOfNum = 0;

    //creating for loop to loop through the elements in an array.
    for (i = 0; i < arr.length; i++) {

        //picking out the numbers divisible by 2 in the array
        if (arr[i] % 2 === 0) {
            sumOfNum += arr[i];
        }

    } 
    
    //returning the varible which added all the even numbers in an array.
    return sumOfNum;
}
console.log(evenNumSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));


