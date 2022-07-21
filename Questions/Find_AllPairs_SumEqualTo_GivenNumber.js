//Solutions to Find Pair Of Integers in Array whose Sum is Given Number


let numbers = [2, 4, 3, 5, 7, 8, 9 ]
let numbersWithDuplicates = [ 2, 4, 3, 5, 6, -2, 4, 7, 8, 9 ]

//1. Brute Force Solution
   // :You take one number from the array and then loop through an array and output pairs which are equal to a given sum.
console.log("--------------------------- Brute Force Solution---------------------------------------------------------")
printPairsWith_Brute_Force(numbers, 7)
printPairsWith_Brute_Force(numbersWithDuplicates, 7)

function printPairsWith_Brute_Force(numberArray, sum){

    for(let i=0; i<numberArray.length; i++){
        for(let j=i+1; j<numberArray.length;j++){
            ((numberArray[i]+numberArray[j])== sum)? 
            (console.log("Integer numbers of given array "+numberArray+", whose sum is equal to value "+sum+ " ("+numberArray[i]+","+numberArray[j]+")")):false
        }
    }
}

console.log("--------------------------- Using includes function of an array---------------------------------------------------------")

printPairsUsingIncludes(numbers, 7)
printPairsUsingIncludes(numbersWithDuplicates, 7)

function printPairsUsingIncludes(numbers, sum){
    if(numbers.length<2){
        return
    }
    for(let i=0; i<numbers.length; i++){
        let temp = numbers[i]
        let target = sum-temp
        (numbers.includes(target))?(console.log("Integer numbers of given array "+numbers+", whose sum is equal to value "+sum+ " ("+temp+","+target+")")):false
    }
}