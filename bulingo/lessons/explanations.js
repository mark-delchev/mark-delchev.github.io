var activeContentId = ""; // Global variable to store the currently active content ID

function toggleContent(buttonId) {
  var content = document.getElementById(buttonId + "-content");

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
}
