// Memeriksa preferensi tema yang disimpan di local storage dan menerapkan sebelum halaman selesai dimuat
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark');
}

// Dark Mode
document.addEventListener('DOMContentLoaded', function () {
  var toggleDarkMode = document.getElementById('toggle-darkmode');
  var textDarkMode = document.getElementById('text-darkmode');
  var iconDarkMode = document.getElementById('icon-darkmode');
  var logoMenu = document.getElementById('logo-menu');

  // Fungsi untuk mengatur tema
  function setTheme(isDarkMode) {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      textDarkMode.textContent = 'Light Mode';
      iconDarkMode.textContent = 'light_mode';
      logoMenu.src = './public/img/logo_app_white.png';
    } else {
      document.documentElement.classList.remove('dark');
      textDarkMode.textContent = 'Dark Mode';
      iconDarkMode.textContent = 'dark_mode';
      logoMenu.src = './public/img/logo_app.png';
    }
  }

  // Mendapatkan nama halaman saat ini
  var currentPage = window.location.pathname.split('/').pop();

  // Memeriksa nama halaman dan mengatur tema sesuai kebutuhan
  if (currentPage === 'login.html' || currentPage === 'signup.html') {
    // Selalu menggunakan mode terang untuk halaman login dan signup
    setTheme(false);
    // Menyimpan preferensi mode terang di local storage untuk halaman login dan signup
    localStorage.setItem('darkMode', 'false');
  } else {
    // Mengatur tema sesuai dengan yang tersimpan di local storage untuk halaman lain
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
    setTheme(isDarkMode);
  }

  if (toggleDarkMode && textDarkMode && iconDarkMode) {
    toggleDarkMode.addEventListener('click', function () {
      var isDark = document.documentElement.classList.toggle('dark');
      setTheme(isDark);
      localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    });
  }
});
