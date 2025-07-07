// This script adds simple interactivity to the landing page

// Get the "Give Now" button by its id
var donateButton = document.getElementById('donate-btn');

// When the button is clicked, show a prompt for debit card info
donateButton.onclick = function() {
  // Get the value from the input box
  var changeInput = document.getElementById('change-input').value;
  // Show a prompt asking for debit card information
  var cardInfo = prompt('Please enter your debit card information to donate:');
  // If the user enters something, show thank you and confetti
  if (cardInfo) {
    alert('Thank you for your interest in donating!');
    // Show simple confetti using emojis for beginners
    showConfetti();
  }
};

// Simple confetti function using emojis
function showConfetti() {
  // Create a div to hold the confetti
  var confettiDiv = document.createElement('div');
  confettiDiv.style.position = 'fixed';
  confettiDiv.style.top = '0';
  confettiDiv.style.left = '0';
  confettiDiv.style.width = '100%';
  confettiDiv.style.height = '100%';
  confettiDiv.style.pointerEvents = 'none';
  confettiDiv.style.zIndex = '9999';
  confettiDiv.style.display = 'flex';
  confettiDiv.style.justifyContent = 'center';
  confettiDiv.style.alignItems = 'center';
  confettiDiv.style.fontSize = '50px';
  confettiDiv.innerText = '🎉🎊🎉🎊🎉';
  document.body.appendChild(confettiDiv);

  // Remove the confetti after 1.5 seconds
  setTimeout(function() {
    document.body.removeChild(confettiDiv);
  }, 1500);
}

// // Get the testimony box by its id (if it exists)
// var testimonyBox = document.getElementById('testimony-box');
// if (testimonyBox) {
//   testimonyBox.onclick = function() {
//     alert('Want to hear real stories? Stay tuned for more!');
//   };
// }
