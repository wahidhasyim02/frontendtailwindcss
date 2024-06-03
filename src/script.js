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

// Script memunculkan Account Setting
document.addEventListener("DOMContentLoaded", function () {
  var accountSetting = document.getElementById("account-setting");
  var popupsetting = document.getElementById("popup-setting");
  var header = document.getElementById("header");

  accountSetting.addEventListener("click", function (event) {
    event.preventDefault();
    header.classList.add("z-1200");
    popupsetting.classList.add("z-1200");
    popupsetting.classList.toggle("hidden");
  });
  // Event listener untuk menambahkan kelas hidden ke menu saat klik di luar area menu
  document.addEventListener("click", function (event) {
    // Memeriksa apakah klik terjadi di luar area menu
    if (
      !popupsetting.contains(event.target) &&
      event.target !== accountSetting &&
      !accountSetting.contains(event.target)
    ) {
      popupsetting.classList.add("hidden");
    }
  });
});

// Script memunculkan Change Profile dan change password
document.addEventListener("DOMContentLoaded", function () {
  var popupChangeprofile = document.getElementById("popup-change-profile");
  var changeProfile = document.getElementById("change-profile");
  var closeChangeprofile = document.getElementById("close-change-profile");
  var popupChangepassword = document.getElementById("popup-change-password");
  var changePassword = document.getElementById("change-password");
  var closeChangepassword = document.getElementById("close-change-password");
  var cancelChangeprofile = document.getElementById("btn-cancel-profile");
  var cancelChangepassword = document.getElementById("btn-cancel-password");

  // Event listener untuk menampilkan/menyembunyikan popup change profile saat tombol menu diklik
  changeProfile.addEventListener("click", function (event) {
    event.preventDefault();
    popupChangeprofile.classList.add("z-1000"); // Set zIndex lebih besar
    popupChangepassword.classList.add("hidden");
    popupChangeprofile.classList.toggle("hidden");
  });

  // Event listener untuk menambahkan kelas hidden ke popup change profile saat klik di tombol close
  closeChangeprofile.addEventListener("click", function (event) {
    event.preventDefault();
    popupChangeprofile.classList.toggle("hidden");
  });

  // Event listener untuk menambahkan kelas hidden ke popup change profile saat klik di tombol cancel
  cancelChangeprofile.addEventListener("click", function (event) {
    event.preventDefault();
    popupChangeprofile.classList.toggle("hidden");
  });

  // Event listener untuk menampilkan/menyembunyikan popup change password saat tombol menu diklik
  changePassword.addEventListener("click", function (event) {
    event.preventDefault();
    popupChangepassword.classList.add("z-1000"); // Set zIndex lebih besar
    popupChangeprofile.classList.add("hidden");
    popupChangepassword.classList.toggle("hidden");
  });

  // Event listener untuk menambahkan kelas hidden ke popup change password saat klik di tombol close
  closeChangepassword.addEventListener("click", function (event) {
    event.preventDefault();
    popupChangepassword.classList.toggle("hidden");
  });

  // Event listener untuk menambahkan kelas hidden ke popup change password saat klik di tombol cabcel
  cancelChangepassword.addEventListener("click", function (event) {
    event.preventDefault();
    popupChangepassword.classList.toggle("hidden");
  });
});

// Dark Mode
document.addEventListener("DOMContentLoaded", function () {
  var toggleDarkMode = document.getElementById("toggle-darkmode");
  var textDarkMode = document.getElementById("text-darkmode");
  var iconDarkMode = document.getElementById("icon-darkmode");
  var body = document.querySelector("body"); // Menyimpan referensi ke elemen <body>

  // Fungsi untuk mengatur tema
  function setTheme(isDarkMode) {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      textDarkMode.textContent = "Light Mode";
      iconDarkMode.textContent = "light_mode";
    } else {
      document.documentElement.classList.remove("dark");
      textDarkMode.textContent = "Dark Mode";
      iconDarkMode.textContent = "dark_mode";
    }
  }

  // Mendapatkan nama halaman saat ini
  var currentPage = window.location.pathname.split("/").pop();

  // Memeriksa nama halaman dan mengatur tema sesuai kebutuhan
  if (currentPage === "login.html" || currentPage === "signup.html") {
    // Selalu menggunakan mode terang untuk halaman login dan signup
    setTheme(false);
    // Menyimpan preferensi mode terang di local storage untuk halaman login dan signup
    localStorage.setItem("darkMode", "false");
  } else if (currentPage === "index.html") {
    // Mengatur tema sesuai dengan yang tersimpan di local storage untuk halaman index
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    setTheme(isDarkMode);
  }

  // Menambahkan event listener untuk toggle button
  toggleDarkMode.addEventListener("click", function () {
    var isDark = document.documentElement.classList.toggle("dark");
    setTheme(isDark);
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  });
});

// Script untuk update waktu
document.addEventListener("DOMContentLoaded", function () {
  const timeZoneMappings = {
    "tz-utc": { offset: 0, label: "UTC" },
    "tz-gmt7": { offset: 7, label: "ETC/GMT-7" },
    "tz-gmt8": { offset: 8, label: "ETC/GMT-8" },
    "tz-gmt9": { offset: 9, label: "ETC/GMT-9" },
  };

  let currentInterval;

  Object.keys(timeZoneMappings).forEach((id) => {
    document.getElementById(id).addEventListener("click", function () {
      const timeZone = timeZoneMappings[id];
      updateTimeZone(timeZone.offset, timeZone.label);
    });
  });

  function updateTimeZone(offset, label) {
    if (currentInterval) {
      clearInterval(currentInterval);
    }
    function updateTime() {
      const now = new Date();

      // Get the current time in UTC and adjust for the selected timezone
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const localTime = new Date(utcTime + 3600000 * offset);

      const date = localTime.toLocaleDateString("en-GB");
      const time = localTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      document.getElementById("date").innerText = date;
      document.getElementById("clock").innerText = time;
      document.getElementById("timezone").innerText = label;

      localStorage.setItem(
        "selectedTimeZone",
        JSON.stringify({ date, time, label, offset })
      );
    }
    updateTime();
    currentInterval = setInterval(updateTime, 1000); // Update everi second
  }

  const savedTimeZone = JSON.parse(localStorage.getItem("selectedTimeZone"));
  if (savedTimeZone) {
    updateTimeZone(savedTimeZone.offset, savedTimeZone.label);
  } else {
    // Set default timezone to UTC if none is saved
    updateTimeZone(
      timeZoneMappings["tz-utc"].offset,
      timeZoneMappings["tz-utc"].label
    );
  }
});

// Initialize the application state from localStorage or set to default
const initialState = {
  textMenuVisible: true,
  tableBillingCashVisible: false,
  tableBillingChargeVisible: false,
  iconAppsVisible: false,
  appBillingCashVisible: false,
  appBillingChargeVisible: false,
};

function loadState() {
  const state = JSON.parse(localStorage.getItem("appState")) || initialState;
  return state;
}

function saveState(state) {
  localStorage.setItem("appState", JSON.stringify(state));
}

function applyState(state) {
  document
    .getElementById("text-menu")
    .classList.toggle("hidden", !state.textMenuVisible);
  document
    .getElementById("table_billing_cash")
    .classList.toggle("hidden", !state.tableBillingCashVisible);
  document
    .getElementById("table_billing_charge")
    .classList.toggle("hidden", !state.tableBillingChargeVisible);

  const iconAppsElement = document.getElementById("icon-apps");
  if (state.iconAppsVisible) {
    iconAppsElement.classList.remove("hidden");
    iconAppsElement.classList.add("flex");
  } else {
    iconAppsElement.classList.remove("flex");
    iconAppsElement.classList.add("hidden");
  }

  document
    .getElementById("app-billing-cash")
    .classList.toggle("hidden", !state.appBillingCashVisible);
  document
    .getElementById("app-billing-charge")
    .classList.toggle("hidden", !state.appBillingChargeVisible);
}

// Update the state and apply changes
function updateState(changes) {
  const state = loadState();
  const newState = { ...state, ...changes };
  saveState(newState);
  applyState(newState);
}

document
  .getElementById("btn_billing_cash")
  .addEventListener("click", (event) => {
    event.preventDefault();
    updateState({
      textMenuVisible: false,
      tableBillingCashVisible: true,
      tableBillingChargeVisible: false,
      iconAppsVisible: true,
      appBillingCashVisible: true,
      appBillingChargeVisible: false,
    });
  });

document
  .getElementById("btn_billing_charge")
  .addEventListener("click", (event) => {
    event.preventDefault();
    updateState({
      textMenuVisible: false,
      tableBillingCashVisible: false,
      tableBillingChargeVisible: true,
      iconAppsVisible: true,
      appBillingCashVisible: false,
      appBillingChargeVisible: true,
    });
  });

document.getElementById("btn_home").addEventListener("click", () => {
  updateState(initialState);
});

// Apply the saved state on page load
window.onload = () => {
  applyState(loadState());
};

// Index Logic
window.addEventListener("load", function () {
  const accountNameElement = document.getElementById("account-name");
  if (accountNameElement) {
    const username = localStorage.getItem("username");
    if (username) {
      accountNameElement.innerText = username;
    }
  }

  const avatar = localStorage.getItem("avatar");
  if (avatar) {
    document.getElementById("profile-img-header").src = avatar;
    document.getElementById("profile-img-change").src = avatar;
    document.getElementById("profile-img-setting").src = avatar;
  }
});

// Save profile changes
document
  .getElementById("btn-save-profile")
  .addEventListener("click", function () {
    const newUsername = document.getElementById("change-username").value;
    const fileInput = document.getElementById("choose-file");
    const file = fileInput.files[0];

    if (newUsername) {
      localStorage.setItem("username", newUsername);
      document.getElementById("account-name").innerText = newUsername;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const dataURL = e.target.result;
        localStorage.setItem("avatar", dataURL);
        document.getElementById("profile-img-header").src = dataURL;
        document.getElementById("profile-img-change").src = dataURL;
        document.getElementById("profile-img-setting").src = dataURL;
      };
      reader.readAsDataURL(file);
    }
  });

// Logout functionality
document.getElementById("logout").addEventListener("click", function () {
  document.getElementById("greeting").classList.add("hidden");
  document.getElementById("logout").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
  const defaultAvatar = "./public/img/avatar.png";
  document.getElementById("profile-img-header").src = defaultAvatar;
  document.getElementById("profile-img-change").src = defaultAvatar;
  document.getElementById("profile-img-setting").src = defaultAvatar;
});

// Redirect to login page
document.getElementById("login").addEventListener("click", function () {
  window.location.href = "login.html";
});
