//PROBLEM 

// 1. Check is the given string is a palindrome. 

function checkPalindrome(inputString) {

    const inputSt = inputString.split(""); //string "a", "b", " c" ....

    //console.log(inputSt)
    const reverseString = [];

    for (let i = inputSt.length; i >= 0; i--){
        reverseString.push(inputSt[i]);
    }

    //const inputIn = res.join("");

    const outputOut = reverseString.join("");
    const inputIn = inputSt.join("");
    
     return inputIn === outputOut; 

    //console.log(inputIn === outputOut);

}


const output = checkPalindrome('aabaa')
output === true ? console.log(`The string is a palindrome`) : console.log(`The string is not a palindrome`)





