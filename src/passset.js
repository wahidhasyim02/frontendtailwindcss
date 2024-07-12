// Save password changes
document
  .getElementById("btn-save-password")
  .addEventListener("click", function () {
    const oldPasswordInput = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const storedPassword = localStorage.getItem("password");

    let errorMessage = "";
    let showAlert = false;

    // Check if any fields are empty
    if (!oldPasswordInput && !newPassword && !confirmPassword) {
      errorMessage =
        "This field cannot be empty. Please enter the required password.";
      showAlert = true;
    } else if (!oldPasswordInput) {
      errorMessage = "Please enter your old password.";
      showAlert = true;
    } else if (!newPassword) {
      errorMessage = "Please enter your new password.";
      showAlert = true;
    } else if (!confirmPassword) {
      errorMessage = "Please enter your confirm password.";
      showAlert = true;
    } else {
      // Check if old password is correct
      if (oldPasswordInput !== storedPassword) {
        errorMessage = "The old password you entered is incorrect.";
        showAlert = true;
      }

      // Check if new password matches old password
      if (newPassword === storedPassword) {
        if (errorMessage) {
          errorMessage +=
            "<br>The new password cannot be the same as the old password.";
        } else {
          errorMessage =
            "The new password cannot be the same as the old password.";
        }
        showAlert = true;
      }

      // Check if new password matches confirm password
      if (newPassword !== confirmPassword) {
        if (errorMessage) {
          errorMessage +=
            "<br>The confirm password does not match the new password.";
        } else {
          errorMessage =
            "The confirm password does not match the new password.";
        }
        showAlert = true;
      }
    }

    if (showAlert) {
      // Show alert popup with error message
      document.getElementById("icon-alert").innerText = "report";
      document.getElementById("name-alert").innerText = "Error";
      document.getElementById("text-alert").innerHTML = errorMessage;
      document
        .getElementById("content-alert")
        .classList.remove("text-green-600");
      document.getElementById("content-alert").classList.add("text-pink-600");
      document.getElementById("popup-alert").classList.add("border-pink-600");
      document.getElementById("popup-alert").classList.remove("hidden");

      // Hide alert popup after 7 seconds
      setTimeout(() => {
        document.getElementById("popup-alert").classList.add("hidden");
      }, 7000);
    } else {
      // Save new password to local storage
      localStorage.setItem("password", newPassword);

      // Show loading spinner
      document.getElementById("icon-save-password").classList.add("hidden");
      document.getElementById("icon-spin-password").classList.remove("hidden");

      // Hide loading spinner and show save icon after 3 seconds
      setTimeout(() => {
        document.getElementById("icon-spin-password").classList.add("hidden");
        document
          .getElementById("icon-save-password")
          .classList.remove("hidden");
      }, 3000);

      // Hide change password popup after 5 seconds
      setTimeout(() => {
        document
          .getElementById("popup-change-password")
          .classList.add("hidden");
      }, 5000);

      // Show success alert popup after 3 seconds
      setTimeout(() => {
        document.getElementById("popup-alert").classList.remove("hidden");
        document.getElementById("icon-alert").innerText = "check_circle";
        document.getElementById("name-alert").innerText = "Success";
        document.getElementById("text-alert").innerText =
          "Your password has been successfully changed.";
        document
          .getElementById("content-alert")
          .classList.remove("text-pink-600");
        document
          .getElementById("popup-alert")
          .classList.remove("border-pink-600");

        document
          .getElementById("content-alert")
          .classList.add("text-green-600");
        document
          .getElementById("popup-alert")
          .classList.add("border-green-600");
      }, 3000);

      // Hide success alert popup after 8 seconds
      setTimeout(() => {
        document.getElementById("popup-alert").classList.add("hidden");
      }, 5000);
    }
  });
