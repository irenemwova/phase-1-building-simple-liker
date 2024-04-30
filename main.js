// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.querySelector("#modal");
  const likeButtons = document.querySelectorAll(".like-glyph");

  // Ensure the modal element exists
  if (!errorModal) {
      console.error("Modal element not found!");
      return;
  }

  // Ensure the modal is hidden initially
  errorModal.classList.add("hidden");

  // Rest of the code remains the same...
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
