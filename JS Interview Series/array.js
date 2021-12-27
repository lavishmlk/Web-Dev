let array = [1,2,3,4,5]
console.log(array)

array.myProp = "myProp";
console.log(array)

array.fun1 = function() {
    console.log("Hello from the array");
}

console.log(array)

array[95] = "95th element";
// console.log(array)

// // length only returns the highest key value in number + 1
// console.log(array.length)

// console.log(array[10]) 

for(let key in array) {
    console.log(key, ":", array[key])
}