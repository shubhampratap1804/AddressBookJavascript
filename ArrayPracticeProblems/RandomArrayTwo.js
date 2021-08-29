let a = Math.floor(Math.random() *100);
let b = Math.floor(Math.random() *100);
let c= Math.floor(Math.random() *100);

let arrayNumbers = new Array(a,b,c);
console.log("Random array is: "+arrayNumbers);

let sortedRandoms = arrayNumbers.slice(0).sort();
console.log("Sorted array is: "+sortedRandoms);

console.log("Second largest number is: "+sortedRandoms[1]);
console.log("Second smallest number is: "+sortedRandoms[1]);

