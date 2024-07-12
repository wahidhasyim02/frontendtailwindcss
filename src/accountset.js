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
  var editProfile = document.getElementById("edit-profile-img");
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

  // Event listener untuk menampilkan/menyembunyikan popup change profile saat tombol menu diklik
  editProfile.addEventListener("click", function (event) {
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

// Account Logic
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

    document.getElementById("icon-save").classList.add("hidden");
    document.getElementById("icon-spin").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("icon-spin").classList.add("hidden");
      document.getElementById("icon-save").classList.remove("hidden");
    }, 3000);
    setTimeout(() => {
      document.getElementById("popup-change-profile").classList.add("hidden");
    }, 3000);
    setTimeout(() => {
      document.getElementById("popup-alert").classList.remove("hidden");
      document.getElementById("icon-alert").innerText = "new_releases";
      document.getElementById("name-alert").innerText = "Success";
      document.getElementById("text-alert").innerText =
        "Your data changes have been successfully saved.";
      document.getElementById("content-alert").classList.add("text-green-600");
      document.getElementById("popup-alert").classList.add("border-green-600");
      document
        .getElementById("content-alert")
        .classList.remove("text-pink-600");
      document
        .getElementById("popup-alert")
        .classList.remove("border-pink-600");
    }, 3000);
    setTimeout(() => {
      document.getElementById("popup-alert").classList.add("hidden");
    }, 6000);

    if (newUsername) {
      localStorage.setItem("username", newUsername);
      setTimeout(() => {
        document.getElementById("account-name").innerText = newUsername;
      }, 3000);
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const dataURL = e.target.result;
        localStorage.setItem("avatar", dataURL);
        setTimeout(() => {
          document.getElementById("profile-img-header").src = dataURL;
          document.getElementById("profile-img-change").src = dataURL;
          document.getElementById("profile-img-setting").src = dataURL;
        }, 3000);
      };
      reader.readAsDataURL(file);
    }
  });

// Script Change Password
/*
document
  .getElementById("btn-save-password")
  .addEventListener("click", function () {
    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    document.getElementById("icon-save-password").classList.add("hidden");
    document.getElementById("icon-spin-password").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("icon-spin-password").classList.add("hidden");
      document.getElementById("icon-save-password").classList.remove("hidden");
    }, 3000);
    setTimeout(() => {
      document.getElementById("popup-change-password").classList.add("hidden");
    }, 3000);
    setTimeout(() => {
      document.getElementById("popup-alert").classList.remove("hidden");
    }, 3000);
    setTimeout(() => {
      document.getElementById("popup-alert").classList.add("hidden");
    }, 6000);

    if (newPassword) {
      localStorage.setItem("password", newPassword);
    }
  });
  */

// Script Popup Alert Change Profile/Password
document
  .getElementById("close-popup-alert")
  .addEventListener("click", function () {
    document.getElementById("popup-alert").classList.add("hidden");
  });
