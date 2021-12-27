// normal function
function fun (a,b) {
    return a*b;    
}

// arrow function
let fn = (a,b) => {
    return a * b;
}

// this can also be written as
let fn2 = (a,b) => a*b;

console.log(fn2(2,3));

// to find whether a number is prime or not
let isPrime = number => {

    for(let i = 2; i < number;i++) {
        if(number % i == 0) return false;
    }

    return true;
}

console.log(isPrime(14))