
const numberArray = [2,2,2,1,3,3,4,3,3,3,3,1,2,1,6,7,8,5,6,7,8]

console.log("Array "+ numberArray+ " is becom "+ removeDuplicate(numberArray)+ " after remove duplicate" )

function removeDuplicate(numberArray){
    numberArray.sort();
    let result = []
    let prev = numberArray[0]
    result[0] = prev
    for(let i=1; i<numberArray.length; i++){
        let temp = numberArray[i]
        if(prev != temp){
            result[i] = temp
        }
        prev = temp
    }
    return result
}