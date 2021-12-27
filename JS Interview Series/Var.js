// hoisting
console.log("line number 2", varName);

// declare
var varName;

// assign
varName = 10;
console.log("line number 9",varName);

// reassign
varName = 20;
console.log("line number 13",varName);

// redeclare
var varName;
console.log("line number 17",varName);

var varName = 100;
console.log("line number 20", varName);
