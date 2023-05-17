// Explanations toggle

var isExplainEnabled = true;

function toggleExplain() {
  isExplainEnabled = !isExplainEnabled; // Toggle the expain enabled state

  var toggleButton = document.getElementById('toggleExplain');
  if (isExplainEnabled) {
    toggleButton.textContent = 'Disable Explanations';
  } else {
    toggleButton.textContent = 'Enable Explanations';
  }
}


var activeContentId = ""; // Global variable to store the currently active content ID

function toggleContent(buttonId) {
  var content = document.getElementById(buttonId + "-content");
  if (isExplainEnabled) {
    // If the clicked content is already active, hide it and clear the activeContentId
    if (buttonId === activeContentId) {
      content.style.opacity = 0;
      setTimeout(function() {
        content.style.display = "none";
        activeContentId = "";
      }, 300);
    }
    // If a different content is active, hide the active content and show the clicked content
    else if (activeContentId) {
      var activeContent = document.getElementById(activeContentId + "-content");
      activeContent.style.opacity = 0;
      setTimeout(function() {
        activeContent.style.display = "none";
        content.style.display = "block";
        setTimeout(function() {
          content.style.opacity = 1;
        }, 10);
        activeContentId = buttonId;
      }, 300);
    }
    // If no content is active, show the clicked content and set it as the active content
    else {
      content.style.opacity = 0;
      content.style.display = "block";
      setTimeout(function() {
        content.style.opacity = 1;
      }, 10);
      activeContentId = buttonId;
    }
    // Hide the content after 10 seconds
    setTimeout(function() {
      content.style.opacity = 0;
      setTimeout(function() {
        content.style.display = "none";
        activeContentId = "";
      }, 300);
    }, 5000);
  }
}


// Sound toggle

var isSoundEnabled = true;

function toggleSound() {
  isSoundEnabled = !isSoundEnabled; // Toggle the sound enabled state

  var toggleButton = document.getElementById('toggleButton');
  if (isSoundEnabled) {
    toggleButton.textContent = 'Mute';
  } else {
    toggleButton.textContent = 'Unmute';
  }
}

// Play audio onclick

function playSound(fileName) {
  if (isSoundEnabled) {
    var audio = new Audio('../audio/' + fileName); // Construct the path to the audio file
    audio.play();
  }
}