// Greetings change every 4 seconds
const greetings = [
  "Welcome to Tahaluf Restaurant!",
  "Experience the finest dining!",
  "Delicious meals, unforgettable moments!",
  "Serving happiness on your plate!"
];

// Get the greeting element
const greetingElement = document.getElementById("greeting");

// Initialize a counter
let currentGreetingIndex = 0;

// Function to update the greeting text
function updateGreeting() {
  greetingElement.textContent = greetings[currentGreetingIndex];
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length; // Loop through the array
}

// Update the greeting every 4 seconds
setInterval(updateGreeting, 4000);

// Set the initial greeting
updateGreeting();

//-------------------------------------------//



