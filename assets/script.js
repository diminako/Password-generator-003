// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var randoNum = Math.floor(Math.random() * 10)
  var randoNum2 = Math.floor(Math.random() * 10)
  var specialChars = ["!", "@", "#", "$", "%", "&", "*", "?", "<", ">", "^", "="];
  var specialChars1 = specialChars[randoNum];
  var specialChars2 = specialChars[randoNum2];
  var userName = prompt("Please enter your first name.")
  var userAge = prompt("Please enter your birth year")
  var favAnimal = prompt("Please enter your favorite animal.")
  var favAnimalChar = favAnimal.slice(1, 3);

  return userAge[0] +
    userName[0] +
    Math.floor(Math.random() * 10) +
    specialChars1 +
    favAnimalChar +
    Math.floor(Math.random() * 10) +
    userName[userName.length - 1] +
    userAge[userAge.length - 1] +
    specialChars2
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);