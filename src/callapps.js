// Initialize the application state from localStorage or set to default
const initialState = {
  textMenuVisible: true,
  tableBillingCashVisible: false,
  filterBillingcashVisible: false,
  tableBillingChargeVisible: false,
  iconAppsVisible: false,
  appBillingCashVisible: false,
  appBillingChargeVisible: false,
};

function loadState() {
  const state = JSON.parse(sessionStorage.getItem("appState")) || initialState;
  return state;
}

function saveState(state) {
  sessionStorage.setItem("appState", JSON.stringify(state));
}

function applyState(state) {
  document
    .getElementById("text-menu")
    .classList.toggle("hidden", !state.textMenuVisible);
  document
    .getElementById("table_billing_cash")
    .classList.toggle("hidden", !state.tableBillingCashVisible);
  document
    .getElementById("filter-billing-cash")
    .classList.toggle("hidden", !state.filterBillingcashVisible);
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
    .getElementById("filter-billing-cash")
    .classList.toggle("hidden", !state.filterBillingcashVisible);

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
    menu.classList.add("hidden"), event.preventDefault();
    updateState({
      textMenuVisible: false,
      tableBillingCashVisible: true,
      filterBillingcashVisible: true,
      tableBillingChargeVisible: false,
      iconAppsVisible: true,
      appBillingCashVisible: true,
      appBillingChargeVisible: false,
    });
  });

document
  .getElementById("btn_billing_charge")
  .addEventListener("click", (event) => {
    menu.classList.add("hidden"), event.preventDefault();
    updateState({
      textMenuVisible: false,
      tableBillingCashVisible: false,
      tableBillingChargeVisible: true,
      filterBillingcashVisible: true,
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
