const correctPassword = "13139S";

function checkPassword_S() {
  const userInput = document.getElementById("passwordInput").value;

  if (userInput === correctPassword) {
    document.getElementById("result").textContent = "Access granted";

    // Redirect after success
    window.location.href = "sounds.html";
  } else {
    document.getElementById("result").textContent = "Wrong password";

    window.location.href = "index.html";
  }
}
