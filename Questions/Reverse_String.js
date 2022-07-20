//Revers string using arrays

let inputStringOne = "NimalKamal";

console.log("Revers string of " + inputStringOne + " is "+ getReversString(inputStringOne) +"")

function getReversString(string){
    let reversString =  string.split('').reverse().join('')
    return reversString
}


//Revers string using charAt

console.log("Revers string of " + inputStringOne + " is "+ getReversStringUsingCarAt(inputStringOne) +"")

function getReversStringUsingCarAt(string){
    let reverse = ""
    for(let x= string.length; x>=0; x--){
        reverse = reverse + string.charAt(x)
    }
    return reverse
}
