// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor((Math.random()*10)+1);

}

function checkGuess() {
  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  // 5. Here should be an if-else statement.

  if (userGuess == secretNumber) {
    resultElement.innerHTML = '<h1>Congratulations! You guessed the correct number</h1>';
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    secretNumber = generateRandomNumber(); // Update secretNumber with a new random number
  } else {
    resultElement.innerHTML = '<h1>Sorry, try again!</h1>';
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
  }

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}

function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");

  // Append both the image and sound elements to resultContainer
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);

  // Now, set innerHTML if needed
  // resultContainer.innerHTML = ""; // You may or may not need this line, depending on your requirements
}
