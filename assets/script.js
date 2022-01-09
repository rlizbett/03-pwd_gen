// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


//upper case, lower case, special characters, and number variables 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];
var spcChoice = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
var numsChoice = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//var charset = [];
var answer = ""; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{}

window.onload=alert("Click Generate Password to begin.");
function generatePasswordChoices(){
var password = "";

//8-128 characters length choice variable
var lengthChoice = parseInt(prompt("What length would you like for the password?"));
console.log(lengthChoice);
if (lengthChoice < 8 || lengthChoice > 128){
    generatePasswordChoices()}

//uppercase variable
var upperCase = window.confirm("Would you like your password to include upper case letters?");
if (upperCase === true){
    window.confirm("Adding uppercase");
    
}

//lowercase variable
var lowerCase = window.confirm("Would you like your password to include lower case letters?");
if (lowerCase === true){
    window.confirm("Adding lowercase");
    
}

//Special Characters variable
var spcChoice = window.confirm("Would you like your password to include special charcters?");
if (spcChoice === true){
    window.confirm("Adding special characters");
    
}

//numbers variable
var numsChoice = window.confirm("Would you like your password to include numbers?");
if (numsChoice === true){
    window.confirm("Adding numbers");
   
}

var passOptions = {
    length: lengthChoice,
    containUpper: upperCase,
    containLower: lowerCase,
    containSpc: spcChoice,
    containNums: numsChoice,
}
return passOptions;

}
function generatePassword(){
    var criteria = generatePasswordChoices();
    var charset = [];
    var passwordfin = [];
    if(criteria.containUpper){
        charset = charset.concat(upperCase);
    }
    if(criteria.containLower){
        charset = charset.concat(lowerCase);
    }if(criteria.containSpc){
        charset = charset.concat(spcChoice);
    }if(criteria.containNums){
        charset = charset.concat(numsChoice);
    }
    console.log(charset);
    for (i = 0; i< criteria.length; i++){
        var randomNum = Math.floor(Math.random() * charset.length)
        passwordfin = passwordfin.concat(charset[randomNum]) ;
        console.log(passwordfin);
     }
     alert(passwordfin.join(""));
     var password = passwordfin.join("")
     return password;
    }


    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      
      }