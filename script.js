// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

//upper case, lower case, special characters, and number variables 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];
var spcChoice = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
var numsChoice = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var charset = [];
var answer = ""; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{}

window.onload=alert("Click Generate Password to begin.");
function generatePassword(){
var password = "";

//8-128 characters length choice variable
var lengthChoice = parseInt(prompt("What length would you like for the password?"));
console.log(lengthChoice);
if (lengthChoice < 8 || lengthChoice > 128){
    generatePassword()}

//uppercase variable
var upperCase = window.confirm("Would you like your password to include upper case letters?");
if (upperCase === true){
    charset.push(upperCase)
    console.log(charset)}

//lowercase variable
var lowerCase = window.confirm("Would you like your password to include lower case letters?");
if (lowerCase === true){
    charset.push(lowerCase)
    console.log(charset)}

//Special Characters variable
var spcChoice = window.confirm("Would you like your password to include special charcters?");
if (spcChoice === true){
    charset.push(spcChoice)
    console.log(charset)}

//numbers variable
var numsChoice = window.confirm("Would you like your password to include numbers?");
if (numsChoice === true){
    charset.push(numsChoice)
    console.log(charset)}

for (i = 0; i< lengthChoice; i++){
    passwordCharset = Math.floor(Math.random() + answer.lengthChoice)
    return "password";
}
}