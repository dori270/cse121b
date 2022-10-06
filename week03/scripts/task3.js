/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2){
    

// Step 2: In the function, return the sum of the parameters number1 and number2

    let sum = number1 + number2;
    return sum;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers(){
    let number1 = parseInt(document.querySelector("#addend1").value);
    let number2 = parseInt(document.querySelector("#addend2").value);
    let sum = add(number1, number2);


// Step 4: Assign the return value to an HTML form element with an ID of sum

    document.querySelector("#sum").value = sum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

let button = document.querySelector("#addNumbers")

button.addEventListener("click", addNumbers)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

let subtract = function(minuend, subtrahend){
    let difference = minuend - subtrahend;
    return difference;
}

let subtractNumbers = function(){
    let minuend = parseInt(document.querySelector("#minuend").value);
    let subtrahend = document.querySelector("#subtrahend").value;
    let difference = subtract(minuend, subtrahend);
    document.querySelector("#difference").value = difference;
}

let buttton2 = document.querySelector("#subtractNumbers")

buttton2.addEventListener("click", subtractNumbers)

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

//Could it also be written this way:
//let factor1 = document.querySelector("#factor1").value
//let factor2 = document.querySelector("#factor2").value
//const multiply = (factor1, factor2) => {
   // let product = factor1 * factor2;
   // return product;
//} 

const multiply = (factor1, factor2) => {
    let product = factor1 * factor2;
    return product;
}
const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    let product = multiply(factor1, factor2); 
    document.querySelector("#product").value = product
}

let button3 = document.querySelector("#multiplyNumbers")

button3.addEventListener("click", multiplyNumbers)

//aren't arrow functions anonymous? How can I have two functions "named" multiply and multiplyNumbers?

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

let dividend = document.querySelector("#dividend").value

let divisor = document.querySelector("#divisor").value

let quotient = function(dividend, divisor) {
    return dividend/divisor;
}

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

let date = new Date();

// Step 2: Declare a variable to hold the current year

let currentYear = date.getFullYear();

let currentMonth = date.getMonth();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2



// Step 4: Assign the current year variable to an HTML form element with an ID of year


document.querySelector("#year").innerHTML = `©️${currentMonth} ${currentYear}`;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let numbers = [];
for(let i = 1; i <= 25; i++){
    numbers.push(i);
}
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector("#array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

document.querySelector("#odds").innerHTML = numbers.filter(number => number%2 !== 0);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

document.querySelector("#evens").innerHTML = numbers.filter(number => number%2 === 0);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

document.querySelector("#sumOfArray").innerHTML = numbers.reduce((x, y) => x + y);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

document.querySelector("#multiplied").innerHTML = numbers.map(number => number*2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

document.querySelector("#sumOfMultiplied").innerHTML = numbers.map(number => number*2).reduce((x, y) => x + y);