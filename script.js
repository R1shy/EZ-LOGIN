let user = document.getElementById("username").value
let pass = document.getElementById("password").value
let hide = document.getElementById("hidden")
function login() {
  if (user == "R1shy" || user == "r1shy") {
    hide.textContent = "button clicked by: dev"
  }
  else {
    hide.textContent = "button clicked by: " + user
  }
}