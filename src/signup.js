document.addEventListener("DOMContentLoaded", function () {
  // Periksa apakah ini adalah kunjungan pertama setelah browser dibuka
  if (!localStorage.getItem("signup-visited")) {
    // Jika belum pernah dikunjungi, tambahkan class "hidden" pada "popup-login"
    // dan remove class "hidden" pada "popup-login-skeleton"
    document.getElementById("popup-signup").classList.add("hidden");
    document.getElementById("popup-signup-skeleton").classList.remove("hidden");

    // Set timer untuk 1 detik
    setTimeout(() => {
      // Setelah 1 detik, hapus class "hidden" dari "popup-login"
      // dan tambahkan class "hidden" ke "popup-login-skeleton"
      document.getElementById("popup-signup").classList.remove("hidden");
      document.getElementById("popup-signup-skeleton").classList.add("hidden");
    }, 1000);

    // Tandai bahwa situs telah dikunjungi
    localStorage.setItem("signup-visited", "true");
  } else {
    // Jika sudah pernah dikunjungi, pastikan popup-login tampil dan skeleton disembunyikan
    document.getElementById("popup-signup").classList.remove("hidden");
    document.getElementById("popup-signup-skeleton").classList.add("hidden");
  }
});

document.getElementById("btn-signup").addEventListener("click", function () {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  let isValid = true;

  // Periksa apakah username sudah ada di local storage
  const existingUsername = localStorage.getItem("username");

  // Cek apakah username diisi atau sudah ada
  if (!username) {
    document.getElementById("not-fill-username").innerText =
      "Please fill in the username";
    document.getElementById("not-fill-username").classList.remove("invisible");
    document
      .getElementById("signup-username")
      .classList.add(
        "border-pink-400",
        "focus:ring-pink-400",
        "focus:border-pink-400",
        "placeholder:text-pink-300"
      );
    document
      .getElementById("signup-username")
      .classList.remove(
        "border-purdark-400",
        "focus:ring-violet-400",
        "focus:border-violet-400"
      );
    isValid = false;
  } else if (username === existingUsername) {
    document.getElementById("not-fill-username").innerText =
      "The username you entered is already in use";
    document.getElementById("not-fill-username").classList.remove("invisible");
    isValid = false;
  } else {
    document.getElementById("not-fill-username").classList.add("invisible");
  }

  // Cek apakah password diisi
  if (!password) {
    document.getElementById("not-fill-password").innerText =
      "Please fill in the password";
    document.getElementById("not-fill-password").classList.remove("invisible");
    document
      .getElementById("signup-password")
      .classList.add(
        "border-pink-400",
        "focus:ring-pink-400",
        "focus:border-pink-400",
        "placeholder:text-pink-300"
      );
    document
      .getElementById("signup-password")
      .classList.remove(
        "border-purdark-400",
        "focus:ring-violet-400",
        "focus:border-violet-400"
      );
    isValid = false;
  } else {
    document.getElementById("not-fill-password").classList.add("invisible");
  }

  // Jika valid, simpan data ke local storage dan arahkan ke login.html
  if (isValid) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setTimeout(() => {
      document.getElementById("popup-alert-signup").classList.remove("hidden");
    }, 1000);
    setTimeout(() => {
      document.getElementById("popup-alert-signup").classList.add("hidden");
    }, 3000);
    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  }
});

document
  .getElementById("close-popup-alert")
  .addEventListener("click", function () {
    document.getElementById("popup-alert-signup").classList.add("hidden");
  });
