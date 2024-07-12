// Memeriksa apakah sudah pernah dikunjungi halaman utamanya
document.addEventListener("DOMContentLoaded", function () {
  // Periksa apakah ini adalah kunjungan pertama setelah browser dibuka
  if (!localStorage.getItem("visited")) {
    // Jika belum pernah dikunjungi, tambahkan class "hidden" pada "header"
    // dan remove class "hidden" pada "header-skeleton"
    document.getElementById("header-skeleton").classList.remove("hidden");

    // Set timer untuk 5 detik
    setTimeout(() => {
      // Setelah 5 detik, hapus class "hidden" dari "header"
      // dan tambahkan class "hidden" ke "header-skeleton"
      document.getElementById("header").classList.remove("hidden");
      document.getElementById("header-skeleton").classList.add("hidden");
    }, 2000);

    // Tandai bahwa situs telah dikunjungi
    localStorage.setItem("visited", "true");
  } else {
    // Jika sudah pernah dikunjungi, pastikan header tampil dan skeleton disembunyikan
    document.getElementById("header").classList.remove("hidden");
    document.getElementById("header-skeleton").classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Cek apakah ada data login di local storage
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Jika pengguna sudah login, arahkan ke halaman dashboard atau halaman lainnya
  if (!isLoggedIn) {
    window.location.href = "/login.html"; // Ubah sesuai halaman yang sesuai
  }
});

// Script untuk menampilkan menu
document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var tombolMenu = document.getElementById("tombol-menu");
  var closeMenu = document.getElementById("close-menu");

  // Event listener untuk menampilkan/menyembunyikan menu saat tombol menu diklik
  tombolMenu.addEventListener("click", function (event) {
    event.preventDefault();
    menu.classList.add("z-1100");
    menu.classList.toggle("hidden");
  });

  // Event listener untuk menambahkan kelas hidden ke menu saat klik di tombol close
  closeMenu.addEventListener("click", function (event) {
    event.preventDefault();
    menu.classList.toggle("hidden");
  });
});

// Script untuk Search Menu
document.addEventListener("DOMContentLoaded", function () {
  var labelSearch = document.getElementById("label-search");
  var searchMenu = document.getElementById("search-menu");
  var btnSearch = document.getElementById("btn-search");

  // Event listener untuk menambahkan class "hidden" pada label-search
  labelSearch.addEventListener("click", function () {
    labelSearch.classList.add("hidden");
    searchMenu.classList.add("rounded-l-xl");
    searchMenu.classList.remove("rounded-r-xl");
    btnSearch.classList.remove("hidden");
  });
  searchMenu.addEventListener("click", function () {
    labelSearch.classList.add("hidden");
    searchMenu.classList.add("rounded-l-xl");
    searchMenu.classList.remove("rounded-r-xl");
    btnSearch.classList.remove("hidden");
  });
});

// Script Search Menu
document.addEventListener("DOMContentLoaded", (event) => {
  const searchInput = document.getElementById("search-menu");
  const listItems = document.querySelectorAll("#list-menu a");

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();

    listItems.forEach(function (item) {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
