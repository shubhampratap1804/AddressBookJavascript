var dice = new Map();
while(true){
    var key = (Math.floor(Math.random()*10) % 6) +1;
    var value = dice.get(key);
    value++;
    dice.set(key,value);
    if(value == 10){
        break;
    }
}
console.log(dice);
var minValue=10;
for (let [key, value] of dice){
	if(value == 10)
		var maxKey = key;
	if( minValue > value ){
		var minKey = key;
		minValue = value;
	}
}
console.log("Maximum occurring number is: " + maxKey);
console.log("Minimum occurring number is: " + minKey);