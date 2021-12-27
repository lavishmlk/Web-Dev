console.log("Line number 1", varName);
var varName = 10;

// Lexical scoping and b() will print 10 not 20
function b() {
    console.log("Line Number 5",varName);
}

console.log("Line Number 8",varName);

function fn() {
    console.log("Line Number 11",varName);
    var varName = 20;
    b()
    console.log("Line Number 14",varName);
}

fn();

