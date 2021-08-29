
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout});

 rl.question('enter the number: ',(num) => {
    var tempNumber=num;
    var countFactor=0;
    var primeFactor = new Array();
    for(var i = 2 ; i <= num/2 ; i++){
	    if(tempNumber % i == 0){
		    tempNumber = tempNumber / i;
		    primeFactor[countFactor]=i;
		    countFactor++;
            i--;
	    }
    }
    console.log("Prime factors of " + num + " = " + primeFactor);
    rl.close()
});