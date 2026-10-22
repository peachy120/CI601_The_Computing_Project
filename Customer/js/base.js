//---------------------------------------------------------------------------------------
// Control Colour Theme between light and dark
//---------------------------------------------------------------------------------------
const bodyColour = document.querySelector("body");

const lightModeButton = document.querySelector(".colour_button.light_mode");
const darkModeButton = document.querySelector(".colour_button.dark_mode.display_left");

lightModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    bodyColour.classList.remove("dark_colour");

    lightModeButton.classList.remove("display_left");
    darkModeButton.classList.add("display_left");

});

darkModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    bodyColour.classList.add("dark_colour");

    lightModeButton.classList.add("display_left");
    darkModeButton.classList.remove("display_left");

});

//---------------------------------------------------------------------------------------
// Control menu expansion and shrinking
//---------------------------------------------------------------------------------------
const hideMenuInMobile = document.querySelector(".menu_option.hide_in_mobile");

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
const hideSubMenuInMobile = document.querySelector(".sub_menu_option.hide_in_mobile");

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

//---------------------------------------------------------------------------------------
// Testing Login Logout button
//---------------------------------------------------------------------------------------
const loginButton = document.querySelector(".menu_button.login_button.display_block_in_mobile");
const logoutButton = document.querySelector(".menu_button.logout_button");

loginButton.addEventListener("click", function(e) {

    e.preventDefault();

    loginButton.classList.remove("display_block_in_mobile");
    logoutButton.classList.add("display_block_in_mobile");

})

logoutButton.addEventListener("click", function(e) {

    e.preventDefault();

    loginButton.classList.add("display_block_in_mobile");
    logoutButton.classList.remove("display_block_in_mobile");

})