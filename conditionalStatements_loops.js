//Exercise 1: Temperature check
let temperature = 18;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else if (temperature > 25) {
    console.log("It's warm.");
}


let temperature1 = 18;

switch (true) {
    case (temperature1 < 0):
        console.log("It's freezing!");
        break;
    case (temperature1 >= 0 && temperature1 <= 15):
        console.log("It's cold.");
        break;
    case (temperature1 >= 16 && temperature1 <= 25):
        console.log("It's mild.");
        break;
    case (temperature1 > 25):
        console.log("It's warm.");
        break;
    default:
        console.log("Temperature out of range.");
}


//Exercise 2: Divisibility Check
let number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}


let number1 = 6;

let divisibleBy2 = (number1 % 2 === 0);
let divisibleBy3 = (number1 % 3 === 0);

switch (true) {
    case (divisibleBy2 && divisibleBy3):
        console.log("Divisible by both.");
        break;
    case (divisibleBy2):
        console.log("Divisible by 2.");
        break;
    case (divisibleBy3):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}


//Exercise 3: For loops
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even numbers between 1 and 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    sum2 += i;
}
console.log("Sum of numbers from 1 to 100:", sum2);

const numbers1 = [1, 2, 3, 4, 5];
console.log("Elements of the array [1, 2, 3, 4, 5]:");
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log("Largest number:", largest);


//Exercise 4: While loops
console.log("Numbers from 1 to 10:");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


console.log("Even numbers between 1 and 20:");
let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}


let sum1 = 0;
let k = 1;
while (k <= 100) {
    sum1 += k;
    k++;
}
console.log("Sum of numbers from 1 to 100:", sum1);


console.log("Multiples of 5 less than 50:");
let num = 5;
while (num < 50) {
    console.log(num);
    num += 5;
}

//Exercise 5: Do While loops
console.log("Numbers from 1 to 10:");
let num1 = 1;
do {
    console.log(num1);
    num1++;
} while (num1 <= 10);


let sum = 0;
let num2 = 1;
do {
    sum += num2;
    num2++;
} while (num2 <= 100);
console.log("Sum of numbers from 1 to 100:", sum);


let userInput;
do {
    userInput = prompt("Enter a number greater than 10:");
    userInput = parseInt(userInput);
} while (userInput <= 10 || isNaN(userInput));
console.log("Valid number entered:", userInput);


let userInput1;
do {
    userInput1 = prompt("Enter a number greater than 10:");
    userInput1 = parseInt(userInput1);
} while (userInput1 <= 10 || isNaN(userInput1));
console.log("Valid number entered:", userInput1);



