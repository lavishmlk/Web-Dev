const obj1 = {
    Name: "Guneet",
    Age: 21
}

const obj2 = Object.assign({},obj1);

obj2.Name = "Lavish"; //This change will not be reflected in obj1

console.log(obj1);
console.log(obj2);