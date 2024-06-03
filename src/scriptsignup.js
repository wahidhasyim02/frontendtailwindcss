document.getElementById("btn-signup").addEventListener("click", function () {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  let isValid = true;

  if (!username) {
    document.getElementById("not-fill-username").classList.remove("invisible");
    isValid = false;
  } else {
    document.getElementById("not-fill-username").classList.add("invisible");
  }

  if (!password) {
    document.getElementById("not-fill-password").classList.remove("invisible");
    isValid = false;
  } else {
    document.getElementById("not-fill-password").classList.add("invisible");
  }

  if (isValid) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "index.html";
  }
});
