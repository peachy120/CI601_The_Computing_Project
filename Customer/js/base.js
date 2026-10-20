//---------------------------------------------------------------------------------------
// Control Colour Theme between light and dark
//---------------------------------------------------------------------------------------
const bodyColour = document.querySelector("body");

const lightModeButton = document.querySelector(".colour_button.light_mode");
const darkModeButton = document.querySelector(".colour_button.dark_mode.display_inline");

lightModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    bodyColour.classList.remove("dark_colour");

    lightModeButton.classList.add("display_inline");
    darkModeButton.classList.remove("display_inline");

});

darkModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    bodyColour.classList.add("dark_colour");

    lightModeButton.classList.remove("display_inline");
    darkModeButton.classList.add("display_inline");

});

//---------------------------------------------------------------------------------------
// Control menu expansion and shrinking
//---------------------------------------------------------------------------------------
const hideMenuInMobile = document.querySelector(".menu.hide_in_mobile");

const expandMenuButton = document.querySelector(".menu_button.expand.display_inline");
const shrinkMenuButton = document.querySelector(".menu_button.shrink");

expandMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    hideMenuInMobile.classList.add("display_inline");

    expandMenuButton.classList.remove("display_inline");
    shrinkMenuButton.classList.add("display_inline");

});

shrinkMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    hideMenuInMobile.classList.remove("display_inline");
    
    expandMenuButton.classList.add("display_inline");
    shrinkMenuButton.classList.remove("display_inline");

});

//---------------------------------------------------------------------------------------
// Control sub_menu expansion and shrinking
//---------------------------------------------------------------------------------------
const hideSubMenuInMobile = document.querySelector(".sub_menu.hide_in_mobile");

const expandSubMenuButton = document.querySelector(".sub_menu_button.expand.display_inline");
const shrinkSubMenuButton = document.querySelector(".sub_menu_button.shrink");

expandSubMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    hideSubMenuInMobile.classList.add("display_inline");

    expandSubMenuButton.classList.remove("display_inline");
    shrinkSubMenuButton.classList.add("display_inline");

});

shrinkSubMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    hideSubMenuInMobile.classList.remove("display_inline");

    expandSubMenuButton.classList.add("display_inline");
    shrinkSubMenuButton.classList.remove("display_inline");

});
