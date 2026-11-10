//---------------------------------------------------------------------------------------
// Check colour mode that user is currently on
//---------------------------------------------------------------------------------------

const bodyColour = document.querySelector("body");

const bannerCuteDarkVersionLogoLightMode = document.querySelector(".banner_cute_logo.cute_dark_version_for_light_mode");
const bannerCuteLightVersionLogoDarkMode = document.querySelector(".banner_cute_logo.cute_light_version_for_dark_mode");

const bannerTextDarkVersionLogoLightMode = document.querySelector(".banner_text_logo.text_dark_version_for_light_mode");
const bannerTextLightVersionLogoDarkMode = document.querySelector(".banner_text_logo.text_light_version_for_dark_mode");

const footerCuteDarkVersionLogoLightMode = document.querySelector(".footer_cute_logo.cute_dark_version_for_light_mode");
const footerCuteLightVersionLogoDarkMode = document.querySelector(".footer_cute_logo.cute_light_version_for_dark_mode");

const footerTextDarkVersionLogoLightMode = document.querySelector(".footer_text_logo.text_dark_version_for_light_mode");
const footerTextLightVersionLogoDarkMode = document.querySelector(".footer_text_logo.text_light_version_for_dark_mode");

const igDarkVersionLightMode = document.querySelector("#ig_dark_version_for_light_mode");
const igLightVersionDarkMode = document.querySelector("#ig_light_version_for_dark_mode");

const threadsDarkVersionLightMode = document.querySelector("#threads_dark_version_for_light_mode");
const threadsLightVersionDarkMode = document.querySelector("#threads_light_version_for_dark_mode");

const fbDarkVersionLightMode = document.querySelector("#fb_dark_version_for_light_mode");
const fbLightVersionDarkMode = document.querySelector("#fb_light_version_for_dark_mode");

const xDarkVersionLightMode = document.querySelector("#x_dark_version_for_light_mode");
const xLightVersionDarkMode = document.querySelector("#x_light_version_for_dark_mode");

const dcDarkVersionLightMode = document.querySelector("#dc_dark_version_for_light_mode");
const dcLightVersionDarkMode = document.querySelector("#dc_light_version_for_dark_mode");

const lightModeButton = document.querySelector(".colour_button.light_mode");
const darkModeButton = document.querySelector(".colour_button.dark_mode");

if (localStorage.getItem("background_colour") === "dark_mode") {
    bodyColour.classList.add("dark_colour");

    bannerCuteDarkVersionLogoLightMode.classList.remove("display_right");
    bannerCuteLightVersionLogoDarkMode.classList.add("display_right");

    bannerTextDarkVersionLogoLightMode.classList.remove("display_left");
    bannerTextLightVersionLogoDarkMode.classList.add("display_left");

    darkModeButton.classList.remove("display_left");
    lightModeButton.classList.add("display_left");

    footerCuteDarkVersionLogoLightMode.classList.remove("display_right");
    footerCuteLightVersionLogoDarkMode.classList.add("display_right");

    footerTextDarkVersionLogoLightMode.classList.remove("display_left");
    footerTextLightVersionLogoDarkMode.classList.add("display_left");

    igDarkVersionLightMode.classList.remove("display_inline");
    igLightVersionDarkMode.classList.add("display_inline");

    threadsDarkVersionLightMode.classList.remove("display_inline");
    threadsLightVersionDarkMode.classList.add("display_inline");

    fbDarkVersionLightMode.classList.remove("display_inline");
    fbLightVersionDarkMode.classList.add("display_inline");

    xDarkVersionLightMode.classList.remove("display_inline");
    xLightVersionDarkMode.classList.add("display_inline");

    dcDarkVersionLightMode.classList.remove("display_inline");
    dcLightVersionDarkMode.classList.add("display_inline");

}

//---------------------------------------------------------------------------------------
// Control Colour Theme between light and dark
//---------------------------------------------------------------------------------------

lightModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    localStorage.setItem("background_colour", "light_mode");

    bodyColour.classList.remove("dark_colour");

    bannerCuteDarkVersionLogoLightMode.classList.add("display_right");
    bannerCuteLightVersionLogoDarkMode.classList.remove("display_right");

    bannerTextDarkVersionLogoLightMode.classList.add("display_left");
    bannerTextLightVersionLogoDarkMode.classList.remove("display_left");

    lightModeButton.classList.remove("display_left");
    darkModeButton.classList.add("display_left");

    footerCuteDarkVersionLogoLightMode.classList.add("display_right");
    footerCuteLightVersionLogoDarkMode.classList.remove("display_right");

    footerTextDarkVersionLogoLightMode.classList.add("display_left");
    footerTextLightVersionLogoDarkMode.classList.remove("display_left");
    
    igDarkVersionLightMode.classList.add("display_inline");
    igLightVersionDarkMode.classList.remove("display_inline");
    
    threadsDarkVersionLightMode.classList.add("display_inline");
    threadsLightVersionDarkMode.classList.remove("display_inline");
    
    fbDarkVersionLightMode.classList.add("display_inline");
    fbLightVersionDarkMode.classList.remove("display_inline");
    
    xDarkVersionLightMode.classList.add("display_inline");
    xLightVersionDarkMode.classList.remove("display_inline");
    
    dcDarkVersionLightMode.classList.add("display_inline");
    dcLightVersionDarkMode.classList.remove("display_inline");

});

darkModeButton.addEventListener("click", function(e) {

    e.preventDefault();

    localStorage.setItem("background_colour", "dark_mode");

    bodyColour.classList.add("dark_colour");

    bannerCuteDarkVersionLogoLightMode.classList.remove("display_right");
    bannerCuteLightVersionLogoDarkMode.classList.add("display_right");

    bannerTextDarkVersionLogoLightMode.classList.remove("display_left");
    bannerTextLightVersionLogoDarkMode.classList.add("display_left");

    lightModeButton.classList.add("display_left");
    darkModeButton.classList.remove("display_left");

    footerCuteDarkVersionLogoLightMode.classList.remove("display_right");
    footerCuteLightVersionLogoDarkMode.classList.add("display_right");

    footerTextDarkVersionLogoLightMode.classList.remove("display_left");
    footerTextLightVersionLogoDarkMode.classList.add("display_left");

    igDarkVersionLightMode.classList.remove("display_inline");
    igLightVersionDarkMode.classList.add("display_inline");

    threadsDarkVersionLightMode.classList.remove("display_inline");
    threadsLightVersionDarkMode.classList.add("display_inline");

    fbDarkVersionLightMode.classList.remove("display_inline");
    fbLightVersionDarkMode.classList.add("display_inline");

    xDarkVersionLightMode.classList.remove("display_inline");
    xLightVersionDarkMode.classList.add("display_inline");

    dcDarkVersionLightMode.classList.remove("display_inline");
    dcLightVersionDarkMode.classList.add("display_inline");
    
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