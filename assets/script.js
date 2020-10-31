// Assignment Code
//Assigned variable to HTML element with id of generate
var generateBtn = document.querySelector("#generate");

//  Created a random number generator function
function randoGen(x) {
  return Math.floor(Math.random() * x)
}

//  This function uses the random number generator to randomly choose a lower case character
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function randomLower() {
  return lowerArr[randoGen(lowerArr.length)]
}

//  This function uses the random number generator to randomly choose a upper case character
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
function randomUpper() {
  return upperArr[randoGen(upperArr.length)]
}

//  This function uses the random number generator to randomly choose between special characters in this array
var specialChars = ["!", "@", "#", "$", "%", "&", "*", "?", "<", ">", "^", "="];
function randomSpecial() {
  return specialChars[randoGen(specialChars.length)]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//  created a function to generate the password used in the writePassword function
function generatePassword() {

  //  prompts and confirms to let the User input how they would like their password to be generated
  var passLengthPrompt = prompt("Please enter the passwords length: at least 8 and no more than 128 characters")
  //  changes the User inputed password length to be a number
  var passLength = parseInt(passLengthPrompt);
  var ifLowerPrompt = confirm("If you would like lower case characters choose ok.  If not choose cancel.")
  var ifUpperPrompt = confirm("If you would like UPPER case characters choose ok.  If not choose cancel.")
  var ifNumPrompt = confirm("If you would like numerical characters choose ok.  If not choose cancel.")
  var ifSpecialPrompt = confirm("If you would like special characters choose ok.  If not choose cancel.")
  //  An array to store the random characters for the password
  var genPass = []

  //  If statement controlling the logic behind the characters inputs.
  if (passLength >= 8 && passLength <= 128) {
    for (var i = 1; passLength >= i;) {
      if (ifLowerPrompt) {
        genPass.push(randomLower())
        i++
      }
      if (ifUpperPrompt) {
        genPass.push(randomUpper())
        i++
      }
      if (ifNumPrompt) {
        genPass.push(randoGen(10))
        i++
      }
      if (ifSpecialPrompt) {
        genPass.push(randomSpecial())
        i++
      }
      if (ifLowerPrompt === false && ifUpperPrompt === false && ifNumPrompt === false && ifSpecialPrompt === false) {
        alert("You must make at least 1 selection after choosing the password length.")
        generatePassword();
      }
    }
  } else {
    alert("You must choose a number at least 8 and no more than 128")
    generatePassword();
  }

  //  If selections are not valid ie. no options were picked to fill the password.  the function will reset.
  var genPassString = genPass.toString();
  genPassString = genPassString.replace(/,/g, '')
  return genPassString

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My original logic which didn't follow the instructions well enough but still worked.

// var specialChars = ["!", "@", "#", "$", "%", "&", "*", "?", "<", ">", "^", "="];
// var specialChars1 = specialChars[randoGen(10)];
// var specialChars2 = specialChars[randoGen(10)];
// var userName = prompt("Please enter your first name.", "Name")
// var userAge = prompt("Please enter your birth year", "2020")
// var favAnimal = prompt("Please enter your favorite animal.", "dog")
// var passLengthPrompt = prompt("Please enter the passwords length: at least 8 and no more than 128 characters")
// var passLength = parseInt(passLengthPrompt)

// while (passLength > 8 || passLength < 128) {
//   passLength = prompt("Your selection must be between 8 and 128 characters.  Failure to choose will automatically assign 10 characters.")
// }




// var generatedPass = userAge[randoGen(4)] +
//   userName[randoGen(3)].toUpperCase() +
//   randoGen(10) +
//   specialChars1 +
//   favAnimal[randoGen(favAnimal.length)] +
//   randoGen(10) +
//   favAnimal[randoGen(favAnimal.length)] +
//   userName[userName.length - 1].toUpperCase() +
//   userAge[randoGen(4)] +
//   specialChars2;




// console.log(generatedPass);
// return generatedPass;
