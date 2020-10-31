// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");



  passwordText.value = password;


}





function generatePassword() {
  var specialChars = ["!", "@", "#", "$", "%", "&"];
  var randoNum = Math.floor(Math.random() * 10)
  var userName = prompt("Please enter your first name.")






  console.log("hello")
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
