let x = 10;
let y = 3;

console.log(getPowerOfUsingTernary(x,y))
console.log(getPowerOfUsingIf(x,y))
console.log(getPowerOfUsingPow(x,y))

//Uing ternary operator

function getPowerOfUsingTernary(base, exponent){
    let value=0;
    (exponent==0)? (value=1): ((exponent%2==0)?(value=(Math.pow(base*base, exponent/2))):(value=( base * (Math.pow(base*base, (exponent-1)/2)))))
    return value 
}


//Using if condition
function getPowerOfUsingIf(base, exponent){
    let value=0;
    if(exponent==0){
        value =1
    }else if ((exponent%2)==0){
        value=(Math.pow(base*base, exponent/2))
    }else{
        value= (base*(Math.pow(base*base, (exponent-1)/2)))
    }
    return value 
}

// Uing Math.pow
function getPowerOfUsingPow(base, exponent){
    return Math.pow(base,exponent) 
}
