const toggleButon = document.getElementById("menu-toggle");

toggleButon.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
});
