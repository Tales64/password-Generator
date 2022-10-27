// creat arrays to pick characters from one for each question
var num =[1,2,3,4,5,6,7,8,9]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar =["!", "@", "#", "$", "%", "^", "&", "*", ":", ";"]

// Assignment Code
// set up a promp that asks about a password
var generateBtn = document.querySelector("#generate");
// must add a getElementById to the button and a click eventlistener
var hello = prompt ("Would you like to make a new password?")
 console.log(hello)
//  dont know if this is the right thing to use
function  
if (hello === true){
  true = prompt ("How many characters would you like in your password?")
 }
// promp that askes how many charcters will be needed
var newPassword = function() {
  var userInput = prompt ("would you like to use lowercase letters?"); 
  console.log(userInput)
// prompt that asks if you want lower case letters 
  if( userInput === true) {
    alert ( "Would you like to make a new Password?")
  }


//  prompt that askes if you want uppercase letters 
if( userInput === true) {
  alert ( "Would you like to make a new Password?")
}
// need a number genrator to get the random characters
var randomNum = (Math.floor(Math.random()*26) +1);
 console.log(randomNum);
// prompt that askes if you want special characters
if( userInput === true) {
  alert ( "Would you like to make a new Password?")
}
}

// match generated numbers to selected characters based on answers above
// then push each symbole to an array
// join all of the generated characters into a single password

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
