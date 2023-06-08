function toggleButton() {
    var button = document.getElementById("navtog");
    var icon = button.querySelector("ion-icon");
  
    if (icon.getAttribute("name") === "menu") {
      icon.setAttribute("name", "close");
    } else {
      icon.setAttribute("name", "menu");
    }
  }