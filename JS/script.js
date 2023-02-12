// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
 let length = parseInt(prompt("How many"))//this is not finished. you need to finish
};
//conditional to check password length is a number...look for examples online
//conditional(s) to make sure it's between 8 and 128...look for examples online

//Variables to store boolean (Y or N) regarding including special, numeric, lowercase, or UPPER case. Special character example below.
var hasSpecChar = confirm('Click OK to confirm including special characters.');

//Conditional statement to check if user does not want to include any types of characters. Password generator ends if all 4 variable are false.
//Psuedo code example below. Find boolean if else statement to confirm false or true
if(go through different types of characters variables to see if false){else
  alert('Must choose at least one character type')
  return;
}

var pwopts = {
  length: length;
  hasSpecChar: hasSpecChar;
  //need to do other characters
  
};
return pwopts;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var options = getpwOpts();
//look up Math.floor and Math.random function online
//create variable that holds random
}

// Function to generate password with user input
function generatePassword() {
//Variable to store pw as it's being concatenated. Look this up online.

//Array to store types of characters in password
var possibleChars = [];

//Array to contain 1 of each type and make sure it's used
var eachType = [];

//conditional statements that adds array of characters into array of possible characters based on user input
if (options.hasSpecChar) {
  possibleChars = possibleChars.concat(specChar);
  willbeChar.push(getRandom(specChar))
}
}
// Don't forget to do it for the other characters!

//for loop to iterate over the password length from options object, selecting random indices from array of possible characters and concatenating those into result var

//Mix in at least one of willbeChar in to result
for loop willbeChar.length{
  result[i] = willbeChar[i];
}
//turn into a string and pass into writePassword

return result.join('');
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);