//Revers integer using arrays

let inputInteger = 1234567

console.log("Revers string of " + inputInteger + " is "+ getReversInteger(inputInteger) +"")

function getReversInteger(integer){
    let reversInteger =  integer.toString().split('').reverse().join('')
    return reversInteger
}


//Revers integer using charAt

console.log("Revers string of " + inputInteger + " is "+ getReversIntegerUsingCharAt(inputInteger) +"")

function getReversIntegerUsingCharAt(integer){
    let reversInteger = ""
    for(let x= integer.toString().length; x>=0; x--){
        reversInteger = reversInteger + integer.toString().charAt(x)
    }
    return reversInteger
}

//Revers integer using Module operator

console.log("Revers string of " + inputInteger + " is "+ getReversIntegerUsingModule(inputInteger) +"")

function getReversIntegerUsingModule(integer){
    let reversInteger =0
    let rem
    while (integer>0) {
        rem = (integer%10)
        reversInteger = (reversInteger*10) + rem
        integer = parseInt(integer/10)
        
    }
    return reversInteger
}