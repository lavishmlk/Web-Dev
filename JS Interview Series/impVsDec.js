// check whether the square of a number is even or not

// Imperative way

const number = 4;

const noSquared = number * number;

let isEven;

if(noSquared % 2 == 0) {
    isEven = true;
} else {
    isEven = false;
}

console.log(isEven)

// Declarative way
let isSquareEven = x => ((x*x) % 2 == 0)
console.log(isSquareEven(5))