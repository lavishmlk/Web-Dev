var a = 10;
console.log("Line Number 2", a);
function fn() {
    console.log("Line Number 4", a);
    var a = 20;
    a++;
    console.log("Line Number 7", a);
    if(a) {
        var a = 30;
        a++;
        console.log("Line Number 11", a);
    }
    console.log("Line number 13", a);
}
fn();
console.log("Line Number 16",a);