//---------------------------------------------------------------------------------------
// Login Form
//---------------------------------------------------------------------------------------

const loginMemberForm = document.querySelector("#login_member_form");

const memberUsername = loginMemberForm.querySelector("#login_member_username");
const memberPassword = loginMemberForm.querySelector("#login_member_password");

const hint_loginMemberUsername_empty = loginMemberForm.querySelector("#hint_login_member_username_empty");
const hint_loginMemberUsername_unknown = document.querySelector("#hint_login_member_username_unknown");

const hint_loginMemberPassword_empty = loginMemberForm.querySelector("#hint_login_member_password_empty");
const hint_loginMemberPassword_incorrect = document.querySelector("#hint_login_member_password_incorrect");

const loginButton = loginMemberForm.querySelector("#login_member_button");

loginButton.addEventListener("click", async function(e) {

    e.preventDefault();

    username = memberUsername.value.trim();
    password = memberPassword.value.trim();

    let dataOK = true;

    // Check have user left input field for username empty
    if (username.length === 0) {
        hint_loginMemberUsername_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_loginMemberUsername_empty.classList.remove("display");
    }

    // Check have user left input field for password empty
    if (password.length === 0) {
        hint_loginMemberPassword_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_loginMemberPassword_empty.classList.remove("display");
    }

    // Getting data from account_login.php
    try {

        const loginFormData = new FormData(loginMemberForm);

        const response = await fetch ("../Customer/php/account_login.php", {
            method: "POST",
            body: loginFormData,
            credentials: "include"
        })

        const data = await response.json();

        // Check have user enter a username that exists while not showing when the field is empty
        if (!data.username_exists && username.length !== 0 && password.length !== 0) {
            hint_loginMemberUsername_unknown.classList.add("display");
            dataOK = false;
        } else {
            hint_loginMemberUsername_unknown.classList.remove("display");
        }

        // Check have user enter the correct matching password for the username while not showing when the field is empty
        if (!data.username_password_match && password.length !== 0) {
            hint_loginMemberPassword_incorrect.classList.add("display");
            dataOK = false;
        } else {
            hint_loginMemberPassword_incorrect.classList.remove("display");
        }

    } catch (error) {
        console.error(error);
    }

    if (dataOK) {
        window.location.href = "../Customer/template1.html";
    }
})


