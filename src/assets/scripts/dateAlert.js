// Html element
const dateAlert = document.getElementById("date-alert");

// Function to get date now
const getTime = () => {
  return new Date().toTimeString().replace(/ .*/, '');
}

// For instant display on the page, without waiting for setInterval
dateAlert.textContent = getTime();

// Async refresh
setInterval(() => {
  dateAlert.innerHTML = getTime();
}, 1000)