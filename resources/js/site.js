////////////////////
/// MAIN TOP MENU //
////////////////////

// Remove styles associated with no javascript

const jsCheck = document.querySelector(".no-js");
jsCheck.classList.remove("no-js");

// Find archive menu item

const archiveItem = document.getElementsByTagName("a")[4];
archiveItem.setAttribute("id", "toggleMenu");

const archiveMenu = document.querySelector(".sub-nav");
const archiveMenuMobile = document.querySelector(".sub-nav__mobile");

// On click disable default and toggle sub-menu

archiveItem.addEventListener("click", function (evt) {
    evt.preventDefault();
    archiveMenu.classList.toggle("active");
    archiveMenuMobile.classList.toggle("active");
});

////////////////////
///// ACCORDION ////
////////////////////

const accordionLink = document.querySelector(".accordion-link");
// let accordionContent = accordionLink.nextElementSibling;

const accordion = document.getElementsByClassName("accordion-link");

// accordionLink.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     this.classList.toggle("active");
//     accordionContent.classList.toggle("active");
// });

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let accordionContent = this.nextElementSibling;
        accordionContent.classList.toggle("active");
    });
}
