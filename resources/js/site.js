// Remove styles associated with no javascript

const jsCheck = document.querySelector(".no-js");
jsCheck.classList.remove("no-js");

// Find archive menu item

const archiveItem = document.getElementsByTagName("a")[4];
archiveItem.setAttribute("id", "toggleMenu");

const archiveMenu = document.querySelector(".sub-nav");

// On click disable default and toggle sub-menu

archiveItem.addEventListener("click", function (evt) {
    evt.preventDefault();
    archiveMenu.classList.toggle("active");
});
