let increasingvariable = 0; // Define the variable outside the function

function counterFunction(counter) {
    const inrCounter = counter + increasingvariable;
    increasingvariable++; // Increment the variable each time the function is called
    return inrCounter;
}



console.log(counterFunction(5));
console.log(counterFunction(5));
console.log(counterFunction(5));
console.log(counterFunction(5));
console.log(counterFunction(5));
