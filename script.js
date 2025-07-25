// This script adds simple interactivity to the landing page

// The Give Now button now just redirects using a link, so no code is needed here

// // Get the testimony box by its id (if it exists)
// var testimonyBox = document.getElementById('testimony-box');
// if (testimonyBox) {
// testimonyBox.onclick = function() {
// alert('Want to hear real stories? Stay tuned for more!');
// };
// }
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
