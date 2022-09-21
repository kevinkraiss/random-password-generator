// Assignment code here
var passwordEl = document.querySelector('#password')
var generateBtn = document.querySelector("#generate")

var string
var passLength = 10
var userLength
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var nums = '1234567890'
var specChar = '!@#$%^&*()'
// var allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
var selectChars = ''
var characters = selectChars.split('')
var result = ''



function randomInt() {
  return selectChars[Math.floor(Math.random() * selectChars.split('').length)]
}

function genString() {
  result = ''
for (var i = 0; i < passLength; i++) {
  result += randomInt(characters)
}
passwordEl.textContent = result
selectChars = ''
}




function prompts() {
  var userLength = prompt('Input password length (8-128 characters)')
  // console.log(passLength)
  if (userLength >= 8 && userLength <= 128) {
    // console.log('good');
    passLength = userLength;
    // console.log(result)
    
  } else {
    //    console.log('bad');
    alert('Your password must be between 8 and 128 characters')
    prompts()
    
  }
  
  var incUppercase = window.confirm('Include uppercase?')
  if (incUppercase === true) {
    selectChars += upperCase
  }
  
  var incLowercase = window.confirm('Include lowercase?')
  if (incLowercase === true) {
    selectChars += lowerCase
  }
  
  var incNum = window.confirm('Include numbers?')
  if (incNum === true) {
    selectChars += nums
  }
  
  var incSpecchar = window.confirm('Include special characters?')
  if (incSpecchar === true) {
    selectChars += specChar
  }
  
  genString()
  
  
}
generateBtn.addEventListener('click', prompts )


//console.log(passLength)
//console.log(selectChars)
//console.log(passLength)



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
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
