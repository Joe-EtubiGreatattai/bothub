
var loginAttempts = 0;

document.getElementById('login-btn').addEventListener('click',()=>{
// Get the username and password from the form
var username = document.getElementById("loginID").value;
var password = document.getElementById("password").value;

// Validate the username and password
if (username === "" || password === "") {
  // If either field is empty, display an error message
  alert("Username and password are required.");
  return false;
} 
else if (
  (username.toLowerCase() == "bot001" && password == "admin") ||
  (username.toLowerCase() == "bot002" && password == "password321")
) {
  alert("confirm");
  window.open('./../../html/grid.html', "_self");
  return true
} 

// Check the number of login attempts
loginAttempts++;
if (loginAttempts > 3) {
  // If the number of login attempts is greater than 3, display an error message and reset the loginAttempts variable
  alert("You have exceeded the maximum number of login attempts. Please try again later.");
  loginAttempts = 0;
  return false;
}

// If the form is valid, return true to submit it
return true;
})


function openCrypher() {
  window.open('./../../html/bots/crypherNinja/crypherNinja.html', "_self"); 
}

