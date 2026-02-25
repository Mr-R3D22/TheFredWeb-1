const correctPassword = "13139P";

function checkPassword() {
  const userInput = document.getElementById("passwordInput").value;

  if (userInput === correctPassword) {
    document.getElementById("result").textContent = "Access granted";

    // Redirect after success
    window.location.href = "photos.html";
  } else {
    document.getElementById("result").textContent = "Wrong password";

    window.location.href = "index.html";
  }
}
