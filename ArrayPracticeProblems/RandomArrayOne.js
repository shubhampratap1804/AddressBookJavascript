let a = Math.floor(Math.random() *100);
let b = Math.floor(Math.random() *100);
let c= Math.floor(Math.random() *100);

let arrayNumbers = new Array(a,b,c);
console.log(arrayNumbers);

if(a>b && a<c){
    console.log(a+" is second largest number!");
    console.log(a+" is second smallest number!");
}if(a>c && a<b){
    console.log(a+" is second largest number!");
    console.log(a+" is second smallest number!");
}
if(b>a && b<c){
    console.log(b+" is second largest number!");
    console.log(b+" is second smallest number!");
} if(b>c && b<a){
    console.log(b+" is second largest number!");
    console.log(b+" is second smallest number!");
} if(c>a && c<b){
    console.log(c+" is second largest number!");
    console.log(c+" is second smallest number!");
}if(c<a && c>b){
    console.log(c+" is second largest number!");
    console.log(c+" is second smallest number!");
}


