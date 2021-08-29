  
var arrayInteger = new Array();
for ( let i = 0 ; i < 10 ; i++ ){
    arrayInteger[i] = Math.floor(Math.random() * 20) -10;
}
    console.log("Array :"+arrayInteger);
    var isSumZero = 0;
    for( let a = 0 ; a < 8 ; a++ ){
        for(let b = a + 1 ; b < 9 ; b++ ){
            for(let c = b + 1 ; c < 10 ; c++ ){
                if( arrayInteger[a] + arrayInteger[b] + arrayInteger[c] == 0){
                console.log( arrayInteger[a] + " + " + arrayInteger[b] + " + " + arrayInteger[c] + " = 0");
                isSumZero = 1;
            }
        }   
    }
}
if( isSumZero == 0)
console.log("No three integer sum is zero");