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
  // Creating a prompt to display a message to the user of what character length they'd like
  var passLength = prompt("What length would you like your password? (Pick between 10 - 64)");
  }
//conditional to check password length is a number...look for examples online

//conditional(s) to make sure character length is between 10 and 64
if (passLength < 10 || passLength > 64) {
  passLength = prompt("Ensure it's between 10-64 characters, please try again.");
}

// using confirmation prompts to ask the user if they want to try different characters
var pickSpecial = confirm("Click OK if you want special characters");
var pickNumeric = confirm("Click OK if you want numeric characters");
var pickLowercase = confirm("Click OK if you want lowercase characters");
var pickUppercase = confirm("Click OK if you want uppercase characters");



// Conditional statement to check if user does not want to include any types of characters.
// Password generator ends if all 4 variable are false.
// use boolean if statement to confirm this
if (
  pickSpecial === false &&
  pickNumeric === false &&
  pickLowercase === false &&
  pickUppercase === false
) {
  alert("Must choose at least one character type");
  // return is used to exit the function early and prevent the password from being generated if a character type wasn't selected
  return;
}

// Function for getting a random element from an array
// getRandom function is defined with the parameter 'arr' which a random element will be retrieved from
function getRandom(arr) {
  // 'Math.random()' function generates a random number between 0 and 1. 
  // 'Math.floor()' function rounds down the resulting number to an integer.
    return arr[Math.floor(Math.random () * arr.length)];
  }

// Function to generate password with user input
function generatePassword() {

  // Ask user for password options and store the returned values
    var passwordOptions = getPasswordOptions();
  
  // Create an empty array to store characters to be included in the password
  var characters = [];
  
  // Create an empty array to store the final password
  var finalPassword = [];
  
  // Include special characters if user selected "OK" for special characters
  if (passwordOptions.pickSpecial) {
    characters = characters.concat(specialCharacters);
  }
  
   // Include numeric characters if user selected "OK" for numeric characters
   if (passwordOptions.pickNumeric) {
    characters = characters.concat(numericCharacters);
  }
  
  // Include lowercase characters if user selected "OK" for lowercase characters
  if (passwordOptions.pickLowercase) {
    characters = characters.concat(lowerCasedCharacters);
  }
  
  // Include uppercase characters if user selected "OK" for uppercase characters
  if (passwordOptions.pickUppercase) {
    characters = characters.concat(upperCasedCharacters);
  }

 // Using a for loop to generate the password and iterate over the password length from options object

 for (var i = 0; i < passwordOptions.length; i++) {
  // Get a random character from the characters array
  var randomChar = getRandom(characters);

// Adding the random character to the final password array
finalPassword.push(randomChar);
}

// Converting the final password array to a string and return it
return finalPassword.join("");
}



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