// creat arrays to pick characters from one for each question
var numList =["1","2","3","4","5","6","7","8","9"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharList =["!", "@", "#", "$", "%", "^", "&", "*", ":", ";"]

var finishedPassword = 0;
// Assignment Code
// set up a promp that asks about a password
var generateBtn = document.querySelector("#generate");
var x = []
let newPassword = []





// must add a getElementById to the button and a click eventlistener
function  generatePassword(){
  var hello = window.confirm ("Would you like to make a new password?")
  
  //  dont know if this is the right thing to use
  if (hello === true){
    var userInput = window.prompt("How many characters do you want your password to be? (Must be between 8-128)"); 
    if (userInput < 8 || userInput > 128){
      userInput = window.prompt("How many characters do you want your password to be? (Must be between 8-128)");
    }
  console.log(hello)
  console.log(userInput)
  }
  
  // promp that askes how many charcters will be needed
  // prompt that asks if you want lower case letters 
  var wantNumbers = window.confirm ("would you like to use Numbers?")
  var wantLowercsae = window.confirm ("would you like to use lowercase letters?") 
  var wantUppercase = window.confirm ("would you like to use UPPERCASE letters?")
  var wantSpecial = window.confirm ("would you like to use Special characters?")
  console.log(wantLowercsae)
  console.log(wantUppercase)
  console.log(wantNumbers)
  console.log(wantSpecial)
  // console.log(newPassword);
  // then push each symbole to an array
  // join all of the generated characters into a single password
  var index =[]
  // match generated numbers to selected characters based on answers above
  for (let i = 0; i < userInput; i++) {
    
    if (wantNumbers === true){
      var index = Math.floor(Math.random() * numList.length);
      newPassword += numList[index];
      
    }
    if (newPassword.length -- >= userInput){
      break;
    }
    
    
    if (wantLowercsae === true){
      var index = Math.floor(Math.random() * lowercaseList.length);
      newPassword += lowercaseList[index];
    }
    if (newPassword.length -- >= userInput){
      break;
    }
    
    console.log(newPassword);
    if (wantUppercase === true){
      var index = Math.floor(Math.random() * uppercaseList.length);
      newPassword += uppercaseList[index];
    }
    if (newPassword.length -- >= userInput){
      break;
    }
    
    console.log(newPassword);
    if (wantSpecial === true){
      var index = Math.floor(Math.random() * specialCharList.length);
      newPassword += specialCharList[index];
    }
    console.log(newPassword);
    if (newPassword.length -- >= userInput){
      break;
    }
  }
  newPassword
  // Write password to the #password input
}
console.log(newPassword)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
