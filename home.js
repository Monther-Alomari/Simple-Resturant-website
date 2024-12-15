// Greetings change every 4 seconds
const greetings = [
  "Welcome to Tahaluf Restaurant!",
  "Experience the finest dining!",
  "Delicious meals, unforgettable moments!",
  "Serving happiness on your plate!"
];


const greetingElement = document.getElementById("greeting");


let currentGreetingIndex = 0;


function updateGreeting() {
  greetingElement.textContent = greetings[currentGreetingIndex];
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length; 
}


setInterval(updateGreeting, 4000);


updateGreeting();




