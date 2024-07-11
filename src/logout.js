// Logout functionality
document.getElementById("logout").addEventListener("click", function () {
  /* document.getElementById("greeting").classList.add("hidden");
    document.getElementById("logout").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
    const defaultAvatar = "./public/img/avatar.png";
    document.getElementById("profile-img-header").src = defaultAvatar;
    document.getElementById("profile-img-change").src = defaultAvatar;
    document.getElementById("profile-img-setting").src = defaultAvatar;*/
  window.location.href = "login.html";
  // Setelah logout
  localStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("appState");
  // Menghapus visited
  localStorage.removeItem("visited");
});

document.addEventListener("DOMContentLoaded", function () {
  // Cek apakah ada data login di local storage
  const isLoggedIn = localStorage.getItem("isLoggedIn");
});
