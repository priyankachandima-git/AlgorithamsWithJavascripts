let x = "Army"
let y = "Mary"
let z = "Barmy"
let i = "Ramy"

console.log(""+x+" and "+y+" is anagram :"+ isAnagram(x,y)+"" )
console.log(""+x+" and "+z+" is anagram :"+ isAnagram(x,z)+"" )
console.log(""+x+" and "+i+" is anagram :"+ isAnagram(x,i)+"" )
console.log(""+y+" and "+z+" is anagram :"+ isAnagram(y,z)+"" )
console.log(""+y+" and "+i+" is anagram :"+ isAnagram(y,i)+"" )
console.log(""+z+" and "+i+" is anagram :"+ isAnagram(z,i)+"" )

function isAnagram(stringOne, stringTwo){
    return (stringOne.toLowerCase().split('').sort().join('') == stringTwo.toLowerCase().split('').sort().join('') )
}