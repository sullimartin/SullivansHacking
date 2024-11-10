document.addEventListener("DOMContentLoaded", function() {
    const title = " > Sullivan's Hacking ";
    const titleElement = document.querySelector(".animated-title");
    const cursorElement = document.createElement("span");
    cursorElement.classList.add("cursor");
    cursorElement.textContent = "_";
    titleElement.appendChild(cursorElement);
  
    let index = 0;
  
    function typeTitle() {
      if (index < title.length) {
        titleElement.textContent = title.substring(0, index + 1);
        titleElement.appendChild(cursorElement);
        index++;
        setTimeout(typeTitle, 100);
      }
    }
  
    typeTitle();
  });
  