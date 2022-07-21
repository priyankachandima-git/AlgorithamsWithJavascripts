//Find duplicates in an array
const numberArry = [1, 2, 1, 3,4, 4, 4, 3, 5];
const stringName = "PriyankaChandima"
//--------------------1.Using the indexOf() method------------------------------------

console.log("--------------------Using indexOf()....................................")
console.log("Duplicated values by indexOf() "+getGuplicateValuesByIndexOf(numberArry))

function getGuplicateValuesByIndexOf(array){
    return array.filter((item, idex) => array.indexOf(item)!== idex)
}

//--------------------2.Using the has() method------------------------------------
console.log("--------------------Using has()....................................")
console.log("Duplicated values by has() "+getGuplicateValuesByHas(numberArry))
console.log("Duplicated values by has() "+getGuplicateValuesByHas(stringName.split('')))

function getGuplicateValuesByHas(array){
    const uniqElements = new Set(array)     //get the Uniq vlaues
    const filteredElements = array.filter(item =>{
        if(uniqElements.has(item)){
            uniqElements.delete(item)
        }else
            return item
    }) 
    return [...new Set(filteredElements)]
}


