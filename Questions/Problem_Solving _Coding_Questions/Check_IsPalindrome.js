
const a = "Kayak"
const b = "Kayayaak"

console.log(''+a+' is a palindrome '+ checkIsPalindrome(a) +'')
console.log(''+b+' is a palindrome '+ checkIsPalindrome(b) +'')

function checkIsPalindrome(string){
    const reversString = string.split('').reverse().join('')
    if(string.toLowerCase()==reversString.toLowerCase())
        return true
    else
        return false
}

console.log('-----------------Using charAt--------------------------')
console.log(''+a+' is a palindrome '+ checkIsPalindrome(a) +'')
console.log(''+b+' is a palindrome '+ checkIsPalindrome(b) +'')

function checkIsPalindromeWithIsCarAt(string){
    let rev =""
    for(let i=(string.length-1); i>=0; i--){
        rev = rev + string.charAt(i)
    }
    if(rev==string)
        return true
    else
        return false
}