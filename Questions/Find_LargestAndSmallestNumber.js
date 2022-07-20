let numberArray = [12,233,345,12,334,23,45,434,3]

findLargestAndSmallest(numberArray)

function findLargestAndSmallest(numberArray){
    let largest = numberArray[0];
    let smallest =  numberArray[0] ;
   // numberArray.find(x => (x > largest)? (largest = x):(x < smallest)? (smallest = x) : false)
    for(let x=1 ; x < numberArray.length; x++){
        if(largest < numberArray[x])
            largest = numberArray[x]
        if (smallest > numberArray[x])
            smallest = numberArray[x]
    }

    console.log("Largest number in "+ numberArray+ " is "+ largest)
    console.log("Smallest number in "+ numberArray+ " is "+ smallest)
}