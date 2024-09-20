let userr = document.getElementById("username")
let passs = document.getElementById("password")
let hide = document.getElementById("hidden")


function login() {
  let user = userr.value
  let pass = passs.value
  if (user == "dev") {
    window.location.replace("https://56bc8295-eedd-444b-a7ba-f7b2cea5c7d6-00-2uus94n76fhvl.spock.replit.dev/example.html")
  }
  else { alert("normal login!") }
}
