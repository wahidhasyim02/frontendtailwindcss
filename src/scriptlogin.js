document.getElementById("btn-login").addEventListener("click", function () {
  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  let isValid = true;

  if (loginUsername !== storedUsername) {
    document.getElementById("username-wrong").classList.remove("invisible");
    isValid = false;
  } else {
    document.getElementById("username-wrong").classList.add("invisible");
  }

  if (loginPassword !== storedPassword) {
    document.getElementById("password-wrong").classList.remove("invisible");
    isValid = false;
  } else {
    document.getElementById("password-wrong").classList.add("invisible");
  }

  if (isValid) {
    window.location.href = "index.html";
  } else {
    if (loginUsername !== storedUsername && loginPassword !== storedPassword) {
      const popupWrong = document.getElementById("popup-wrong");
      popupWrong.classList.remove("hidden");
      setTimeout(() => {
        popupWrong.classList.add("hidden");
      }, 5000);
    }
  }
});
