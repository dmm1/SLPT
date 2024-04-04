/**
 * Represents a welcome message for FTP servers.
 * @type {string}
 */
const text = "Welcome to the world of FTP servers, where data flows like a stream and connections are secure!";
let index = 0;

/**
 * Simulates a typewriter effect by gradually typing out a given text.
 */
function typeWriter() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();
  
/**
 * Handles the click event when the connect button is clicked.
 */

document.getElementById("connectButton").addEventListener("click", connectClicked);

function connectClicked() {

  const rainContainer = document.querySelector('.rain-container');
  const rainText = document.querySelector('.rain-text');

  rainContainer.style.display = 'block';

  setTimeout(() => {
    rainText.style.display = 'block';
    rainText.style.animation = 'explodeAnimation 10s linear forwards';
  }, 1000);

  setTimeout(() => {
    rainText.style.display = 'none';
    rainContainer.style.display = 'none';
  }, 8000); // Display text for 2 seconds
}

// Function to generate random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update the values with random numbers
function updateValues() {
  document.getElementById("usersOnline").textContent = getRandomNumber(0, 500);
  document.getElementById("totalFiles").textContent = getRandomNumber(0, 5000);
  document.getElementById("storageUsed").textContent = getRandomNumber(0, 100) + "%";
}

// Call the updateValues function every 3 seconds
setInterval(updateValues, 3000);