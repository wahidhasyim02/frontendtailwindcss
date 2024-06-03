document.getElementById("btn-login").addEventListener("click", function () {
  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  let isValid = true;

  if (loginUsername !== storedUsername) {
    document.getElementById("username-wrong").innerText =
      "The username you entered is incorrect.";
    isValid = false;
  } else {
    document.getElementById("username-wrong").classList.add("invisible");
  }
  if (!loginUsername) {
    document.getElementById("username-wrong").innerText =
      "Please fill in the username";
    isValid = false;
  } else {
    document.getElementById("username-wrong").classList.remove("invisible");
  }

  if (loginPassword !== storedPassword) {
    document.getElementById("password-wrong").innerText =
      "The password you entered is incorrect.";
    isValid = false;
  } else {
    document.getElementById("password-wrong").classList.add("invisible");
  }
  if (!loginPassword) {
    document.getElementById("password-wrong").innerText =
      "Please fill in the password";
    isValid = false;
  } else {
    document.getElementById("password-wrong").classList.remove("invisible");
  }

  if (isValid) {
    window.location.href = "index.html";
    // Setelah login berhasil
    localStorage.setItem("isLoggedIn", true);
  }
});
