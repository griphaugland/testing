document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (document.querySelector("#password").value === "password") {
    document.querySelector("#result").innerText = "You are in!";
  } else {
    document.querySelector("#result").innerText = "Wrong password!";
  }
});
