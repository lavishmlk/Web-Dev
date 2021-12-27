console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "Captain America";
console.log("varName",varName);
fn();
function fn() {
    console.log("Hello from fn");
}
fn();
funContainer();
var funContainer = function() {
    console.log("I am an expression");
}

funContainer();