//We have studied that JS is a synchronous language i.e. the code runs line by line
// But in certain cases we may require JS to be asynchronous

const fs = require("fs");

console.log("Before");

// let data = fs.readFileSync("f1.txt"); //This can be a very large file and we need to read it simultaneously as we proceed with rest of our work
// console.log("" + data) // Data comes as a buffer. So, we are converting it to string
// console.log("after");
// console.log("meanwhile");

let data = fs.readFile("f1.txt",callBack) //This is an asynchronous method

function callBack (error,data) {
    if(error) {
        console.error(error)
    } else {
        console.log(data + "")
    }
}

console.log("after");
console.log("meanwhile")