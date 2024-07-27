// Script Filter
document
  .getElementById('btn-download-filter')
  .addEventListener('click', function () {
    document.getElementById('icon-download').classList.add('hidden');
    document.getElementById('icon-spin-download').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('icon-spin-download').classList.add('hidden');
    }, 3000);
    setTimeout(() => {
      document.getElementById('icon-done').classList.remove('hidden');
    }, 3000);
    setTimeout(() => {
      document.getElementById('icon-done').classList.add('hidden');
      document.getElementById('icon-download').classList.remove('hidden');
    }, 6000);
  });

// Fungsi untuk mengubah visibilitas elemen action
function toggleActionVisibility() {
  const action = document.getElementById('action');
  const checkboxes = document.querySelectorAll(
    '#body_billing_charge .checkbox',
  );
  const headCheckbox = document.getElementById('head-checkbox');

  let anyChecked =
    headCheckbox.checked ||
    Array.from(checkboxes).some((checkbox) => checkbox.checked);

  if (anyChecked) {
    action.classList.remove('hidden');
  } else {
    action.classList.add('hidden');
  }
  // Set the indeterminate state
  const allChecked = Array.from(checkboxes).every(
    (checkbox) => checkbox.checked,
  );
  const someChecked = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked,
  );

  headCheckbox.checked = allChecked;
  headCheckbox.indeterminate = !allChecked && someChecked;
}

// Fungsi untuk menghapus status checked dari semua checkbox
function uncheckAllCheckboxes() {
  document.getElementById('head-checkbox').checked = false;
  const checkboxes = document.querySelectorAll(
    '#body_billing_charge .checkbox',
  );
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
  toggleActionVisibility(); // Update visibility of action after unchecking
}

// Event listener untuk head-checkbox
document.getElementById('head-checkbox').addEventListener('click', function () {
  const checkboxes = document.querySelectorAll(
    '#body_billing_charge .checkbox',
  );
  const isChecked = this.checked;

  checkboxes.forEach(function (checkbox) {
    checkbox.checked = isChecked;
  });

  toggleActionVisibility();
});

// Event listener untuk checkboxes dalam body_billing_charge
document
  .querySelectorAll('#body_billing_charge .checkbox')
  .forEach(function (checkbox) {
    checkbox.addEventListener('click', toggleActionVisibility);
  });

// Event listener untuk btn-go-action
document.getElementById('btn-go-action').addEventListener('click', function () {
  uncheckAllCheckboxes();
  document.getElementById('action').classList.add('hidden');
});

// Event listener untuk btn-cancel-action
document
  .getElementById('btn-cancel-action')
  .addEventListener('click', function () {
    uncheckAllCheckboxes();
    document.getElementById('action').classList.add('hidden');
  });

function toggleVisibility(buttonId, listId, textId) {
  const button = document.getElementById(buttonId);
  const list = document.getElementById(listId);
  const text = document.getElementById(textId);

  button.addEventListener('click', function () {
    list.classList.toggle('hidden');
  });

  document.addEventListener('click', function (event) {
    if (
      !list.contains(event.target) &&
      !button.contains(event.target) &&
      !text.contains(event.target)
    ) {
      list.classList.add('hidden');
    }
  });

  // Update button text when list item is clicked
  const listItems = list.querySelectorAll('li');
  listItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Update button text while keeping the icon intact
      text.childNodes[0].nodeValue = this.innerText + ' ';
      list.classList.add('hidden');
    });
  });
}

// Initialize the toggle functionality for each button and list pair
toggleVisibility('btn-years', 'list-years', 'text-years');
toggleVisibility('btn-months', 'list-months', 'text-months');
toggleVisibility('btn-days', 'list-days', 'text-days');
toggleVisibility('btn-list-action', 'list-actions', 'text-action');

// Script untuk senentukan secara default date sekarang
document.addEventListener('DOMContentLoaded', (event) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  document.getElementById('text-years').innerText = year;
  document.getElementById('text-months').innerText = month;
  document.getElementById('text-days').innerText = day;
});

document
  .getElementById('search-billing-cash')
  .addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#body_billing_charge tr');

    rows.forEach((row) => {
      const th = row.querySelector('th').innerText.toLowerCase();
      const td = row.querySelector('td').innerText.toLowerCase();

      if (th.includes(searchValue) || td.includes(searchValue)) {
        row.classList.remove('bg-blue-50', 'dark:bg-xai-800');
        row.classList.add('bg-yellow-50');
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
        row.classList.remove('bg-yellow-50');
        row.classList.add('bg-blue-50', 'dark:bg-xai-800');
      }
    });
  });
