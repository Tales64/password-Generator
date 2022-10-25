// Assignment Code
// set up a promp that asks about a password
var generateBtn = document.querySelector("#generate");
// must add a getElementById to the button and a click eventlistener
var hello = prompt ("Would you like to make a new password?")
 console.log(hello)
//  dont know if this is the right thing to use
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

}
//  prompt that askes if you want uppercase letters 
// need a number genrator to get the random characters
var randomNum = (Math.floor(Math.random()*26) +1);
 console.log(randomNum);
// prompt that askes if you want special characters

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
