// Assignment code here
var passwordEl = document.querySelector('.password')

var passLength = 0
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var nums = '1234567890'
var specChar = '!@#$%^&*()'

// prompt user for length 8-128

function renderPassword() {


}

document.querySelector('.btn').addEventListener('click', function () {
  var userLength = prompt('Input password length (8-128 characters)')
 // console.log(passLength)
  if (userLength > 8 && userLength < 128) {
 //   console.log('good');
    
  } else {
 //    console.log('bad');
    prompt('Your password must be between 8 and 128 characters')
  }
passLength = userLength;
// console.log(passLength)

})
console.log(passLength)



// prompt user for l.c., u.c., num, spec char

// validate that at least one char type selected

// generate password after all prompts are answered

// display on an alert or write it to the page


// var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var passwordLength = 12
// var password = ""

// for (var i = 0; i <= passwordLength; i++) {
//   var randomNum = Math.floor(Math.random() * characters.length)
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
