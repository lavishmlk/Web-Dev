// add 2 numbers 

let a = 2;

function add(num) {
    console.log("The sum is", num + a);
}

// If we change the value of a then the output will be diff. 
// This means that the add function gives diff result with same parameters
// This is an impure function
add(5); 

// This is a pure function as it will give same output for the same params always

function addition(a,b) {
    console.log("The sum is ", a + b); //Since we are printing on the console, it is having an external effect.
    // This is called as side effect.
}

addition(5,10)

// In functional programming, we try to write pure functions without side effects.
// However, pure funcs with side effects if needed are also good. No problem with that.

// pure function without side effect
function addition2(a,b) {
    return a + b; //apart from the result of the func, nothing is affected hence there are no side effects
}

console.log(addition2(10,20))