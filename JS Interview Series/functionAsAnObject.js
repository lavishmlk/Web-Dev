function fn() {
    console.log("I am a function");
}

fn.myProp = "property of a function";
fn.myMeth = function() {
    console.log("I am a method of a function");
}

console.log(fn);
fn()
fn.myMeth()
console.log(fn.myProp)
