function largestNum(numArr) {
    let largestNum = 1;
   
       numArr.forEach(num => {
           if(num > largestNum){
               largestNum = num
           }
           
       });
   return largestNum;
   }
   
   console.log(largestNum([0,100,4]));