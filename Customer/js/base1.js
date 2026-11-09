//---------------------------------------------------------------------------------------
// Check colour mode that user is currently on
//---------------------------------------------------------------------------------------

const bodyColour = document.querySelector("body");

const cuteDarkVersionLogoLightMode = document.querySelector(".cute_logo.cute_dark_version_for_light_mode");
const cuteLightVersionLogoDarkMode = document.querySelector(".cute_logo.cute_light_version_for_dark_mode");

const textDarkVersionLogoLightMode = document.querySelector(".text_logo.text_dark_version_for_light_mode");
const textLightVersionLogoDarkMode = document.querySelector(".text_logo.text_light_version_for_dark_mode");

const lightModeButton = document.querySelector(".colour_button.light_mode");
const darkModeButton = document.querySelector(".colour_button.dark_mode");

if (localStorage.getItem("background_colour") === "dark_mode") {
    bodyColour.classList.add("dark_colour");

    cuteDarkVersionLogoLightMode.classList.remove("display_right");
    cuteLightVersionLogoDarkMode.classList.add("display_right");

    textDarkVersionLogoLightMode.classList.remove("display_left");
    textLightVersionLogoDarkMode.classList.add("display_left");

    darkModeButton.classList.remove("display_left");
    lightModeButton.classList.add("display_left");

}

//---------------------------------------------------------------------------------------
// Control Colour Theme between light and dark
//---------------------------------------------------------------------------------------

lightModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    localStorage.setItem("background_colour", "light_mode");

    bodyColour.classList.remove("dark_colour");

    cuteDarkVersionLogoLightMode.classList.add("display_right");
    cuteLightVersionLogoDarkMode.classList.remove("display_right");

    textDarkVersionLogoLightMode.classList.add("display_left");
    textLightVersionLogoDarkMode.classList.remove("display_left");

    lightModeButton.classList.remove("display_left");
    darkModeButton.classList.add("display_left");

});

darkModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    localStorage.setItem("background_colour", "dark_mode");

    bodyColour.classList.add("dark_colour");

    cuteDarkVersionLogoLightMode.classList.remove("display_right");
    cuteLightVersionLogoDarkMode.classList.add("display_right");

    textDarkVersionLogoLightMode.classList.remove("display_left");
    textLightVersionLogoDarkMode.classList.add("display_left");

    lightModeButton.classList.add("display_left");
    darkModeButton.classList.remove("display_left");

});

//---------------------------------------------------------------------------------------
// Control menu expansion and shrinking
//---------------------------------------------------------------------------------------
const hideMenuInMobile = document.getElementsByClassName("menu_option hide_in_mobile");

const expandMenuButton = document.querySelector(".expand_shrink_menu_button.expand.display_block");
const shrinkMenuButton = document.querySelector(".expand_shrink_menu_button.shrink");

expandMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    for (const menu_option of hideMenuInMobile) {
        menu_option.classList.add("display_block");
    }

    expandMenuButton.classList.remove("display_block");
    shrinkMenuButton.classList.add("display_block");

});

shrinkMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    for (const menu_option of hideMenuInMobile) {
        menu_option.classList.remove("display_block");
    }
    
    expandMenuButton.classList.add("display_block");
    shrinkMenuButton.classList.remove("display_block");

});

//---------------------------------------------------------------------------------------
// Control sub_menu expansion and shrinking
//---------------------------------------------------------------------------------------
const hideSubMenuInMobile = document.getElementsByClassName("sub_menu_option hide_in_mobile");

const expandSubMenuButton = document.querySelector(".expand_shrink_sub_menu_button.expand.display_block");
const shrinkSubMenuButton = document.querySelector(".expand_shrink_sub_menu_button.shrink");

expandSubMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    for (const sub_menu_option of hideSubMenuInMobile) {
        sub_menu_option.classList.add("display_block");
    }    

    expandSubMenuButton.classList.remove("display_block");
    shrinkSubMenuButton.classList.add("display_block");

});

shrinkSubMenuButton.addEventListener("click", function(e) {

    e.preventDefault();

    for (const sub_menu_option of hideSubMenuInMobile) {
        sub_menu_option.classList.remove("display_block");
    }

    expandSubMenuButton.classList.add("display_block");
    shrinkSubMenuButton.classList.remove("display_block");

});