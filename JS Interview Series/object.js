// key value pair
// key can be a number or a string
// value can be anything which is a valid type in JS

let object = {
    name: "Guneet",
    lastName : "Malhotra",
    sayHi: function() {
        console.log(this.name + " " + this.lastName + " says hi");
    }
}

console.log(object);
console.log("***********LOOP THROUGH THE OBJECT USING FOR IN LOOP************");

for(let key in object) {
    console.log(key , ":" , object[key]);
}

object.sayHi()