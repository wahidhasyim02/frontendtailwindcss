document.addEventListener("DOMContentLoaded", function () {
  // Periksa apakah ini adalah kunjungan pertama setelah browser dibuka
  if (!localStorage.getItem("login-visited")) {
    // Jika belum pernah dikunjungi, tambahkan class "hidden" pada "popup-login"
    // dan remove class "hidden" pada "popup-login-skeleton"
    document.getElementById("popup-login").classList.add("hidden");
    document.getElementById("popup-login-skeleton").classList.remove("hidden");

    // Set timer untuk 5 detik
    setTimeout(() => {
      // Setelah 5 detik, hapus class "hidden" dari "popup-login"
      // dan tambahkan class "hidden" ke "popup-login-skeleton"
      document.getElementById("popup-login").classList.remove("hidden");
      document.getElementById("popup-login-skeleton").classList.add("hidden");
    }, 5000);

    // Tandai bahwa situs telah dikunjungi
    localStorage.setItem("login-visited", "true");
  } else {
    // Jika sudah pernah dikunjungi, pastikan popup-login tampil dan skeleton disembunyikan
    document.getElementById("popup-login").classList.remove("hidden");
    document.getElementById("popup-login-skeleton").classList.add("hidden");
  }
});

document.getElementById("btn-login").addEventListener("click", function () {
  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  let isValid = true;

  if (loginUsername !== storedUsername) {
    document.getElementById("username-wrong").innerText =
      "The username you entered is incorrect.";
    document
      .getElementById("login-username")
      .classList.add(
        "border-pink-400",
        "focus:ring-pink-400",
        "focus:border-pink-400",
        "placeholder:text-pink-300"
      );
    document
      .getElementById("login-username")
      .classList.remove(
        "border-zinc-400",
        "focus:ring-violet-400",
        "focus:border-violet-400"
      );
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
    document
      .getElementById("login-password")
      .classList.add(
        "border-pink-400",
        "focus:ring-pink-400",
        "focus:border-pink-400",
        "placeholder:text-pink-300"
      );
    document
      .getElementById("login-password")
      .classList.remove(
        "border-zinc-400",
        "focus:ring-violet-400",
        "focus:border-violet-400"
      );
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
