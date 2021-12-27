// const a = 10;
// We should get an error as we are re-assigning the const value
const a = [1,2,3,4,5];
console.log(a);

// How and why is this allowed?
a.shift();
console.log(a);