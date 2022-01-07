// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){

//8-128 characters length choice variable
var lengthChoice = prompt(" Please choose a length between 8-128 characters.")

//upper case, lower case, special characters, and number variables 
var upperChoice = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
var lowerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];
var spcChoice = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
var numsChoice = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}