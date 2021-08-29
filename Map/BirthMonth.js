var birthday = new Map();
let count =0;
while(count<51){
    var birthdayKey = (Math.floor(Math.random()*100) % 24 + 1);
    var birthdayValue = birthday.get(birthdayKey);
    birthdayValue++;
    birthday.set(birthdayKey ,birthdayValue);
    count++;
}
console.log(birthday);