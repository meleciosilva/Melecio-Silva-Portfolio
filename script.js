// Global Variables
const greeting = document.querySelector('#greeting');

function getTime() {
  return new Date().getHours();
}

// Retrieves appropriate greeting respective to time of day
function getGreeting() {  
  const time = getTime();
  console.log(time);
  if (time < 12) {
    return "Good Morning! My Name is Melecio.";
  } else if (time >= 12 || time <= 18) {
    return "Good Afternoon! My name is Melecio.";
  } else if (time > 18) {
      return "Good Evening! My name is Melecio.";
  } else {
    return "Hi! My Name is Melecio"
  }
}

function insertGreeting() {
  greeting.innerHTML = getGreeting();
}

function main() {
  getTime();
  getGreeting();
  insertGreeting();
}

document.addEventListener("DOMContentLoaded", main());