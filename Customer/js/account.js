//---------------------------------------------------------------------------------------
// Button in left_column
//---------------------------------------------------------------------------------------

const leftColumn_accountDetails_button = document.querySelector("#left_column_account_details_button");
const leftColumn_updateDetails_button = document.querySelector("#left_column_update_details_button");
const leftColumn_changePassword_button = document.querySelector("#left_column_change_password_button");

//---------------------------------------------------------------------------------------
// Getting Buttons and forms
//---------------------------------------------------------------------------------------

const accountDetailsArea = document.querySelector("#account_details_area");
const updateDetailsArea = document.querySelector("#update_details");
const changePasswordArea = document.querySelector("#change_password");

const accountDetails_updateDetails_button = accountDetailsArea.querySelector("#account_member_update_details_button");
const accountDetails_changePassword_button = accountDetailsArea.querySelector("#account_member_change_password_button");
const accountDetails_deleteAccount_button = accountDetailsArea.querySelector("#account_member_delete_account_button");

accountDetails_updateDetails_button.addEventListener("click", function(e) {

    e.preventDefault();

    accountDetailsArea.classList.remove("display");
    updateDetailsArea.classList.add("display");
    changePasswordArea.classList.remove("display");
})

accountDetails_changePassword_button.addEventListener("click", function(e) {
    
    e.preventDefault();

    accountDetailsArea.classList.remove("display");
    updateDetailsArea.classList.remove("display");
    changePasswordArea.classList.add("display");
})

accountDetails_deleteAccount_button.addEventListener("click", function(e) {

    e.preventDefault();
    
})

//---------------------------------------------------------------------------------------
// Update Details
//---------------------------------------------------------------------------------------

const updateDetailsForm = document.querySelector("#account_member_update_details_form");







//---------------------------------------------------------------------------------------
// Change Password
//---------------------------------------------------------------------------------------

const changePasswordForm = document.querySelector("#account_member_change_password_form");

const currentPassword = changePasswordForm.querySelector("#account_member_change_password_current_password");
const newPassword = changePasswordForm.querySelector("#account_member_change_password_new_password");
const newPassword2 = changePasswordForm.querySelector("#account_member_change_password_new_password2");

const hint_currentPassword_empty = changePasswordForm.querySelector("#hint_account_member_change_password_current_password_empty");
const hint_currentPassword_unmatch = changePasswordForm.querySelector("#hint_account_member_change_password_current_password_unmatch");
const hint_newPassword_empty = changePasswordForm.querySelector("#hint_account_member_change_password_new_password_empty");
const hint_newPassword_short = changePasswordForm.querySelector("#hint_account_member_change_password_new_password_short");
const hint_newPassword_noAZ = changePasswordForm.querySelector("#hint_account_member_change_password_new_password_noAZ");
const hint_newPassword_noNumber = changePasswordForm.querySelector("#hint_account_member_change_password_new_password_noNumber");
const hint_newPassword2_empty = changePasswordForm.querySelector("#hint_account_member_change_password_new_password2_empty");
const hint_newPassword2_unmatch = changePasswordForm.querySelector("#hint_account_member_change_password_new_password2_unmatch");

const changePasswordFormButton = changePasswordForm.querySelector("#account_member_change_password_form_button");

changePasswordFormButton.addEventListener("click", async function(e) {

    e.preventDefault();

    currentPasswordEntered = currentPassword.value.trim();
    newPasswordEntered = newPassword.value.trim();
    newPassword2Entered = newPassword2.value.trim();

    let dataOK = true;

    if (currentPasswordEntered.length === 0) {
        hint_currentPassword_empty.classList.add("display");
        hint_currentPassword_unmatch.classList.remove("display");
        dataOK = false;
    } else {
        hint_currentPassword_empty.classList.remove("display");
        hint_currentPassword_unmatch.classList.remove("display");
    }

    try {
        const changePasswordFormData = new FormData(changePasswordForm);

        const response = await fetch ("../Customer/php/account_change_password.php", {
            method: "POST",
            body: changePasswordFormData,
            credentials: "include"
        })

        const data = await response.json();

        if (data.password_match) {
            hint_currentPassword_empty.classList.remove("display");
            hint_currentPassword_unmatch.classList.add("display");
            dataOK = false;
        } else {
            hint_currentPassword_empty.classList.remove("display");
            hint_currentPassword_unmatch.classList.remove("display");
        }

    } catch(error) {
        console.error(error);
    }

    const findNumbers = newPasswordEntered.match(/[0-9]/g);
    const numberCount = findNumbers ? findNumbers : 0;

    const findLetters = newPasswordEntered.match(/[A-Za-z]/g);
    const letterCount = findLetters ? findLetters : 0;

    if (newPasswordEntered.length === 0) {
        hint_newPassword_empty.classList.add("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.remove("display");
        dataOK = false;
    } else if (newPasswordEntered.length < 8) {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.add("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.remove("display");
        dataOK = false;
    } else if (letterCount < 5) {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.add("display");
        hint_newPassword_noNumber.classList.remove("display");
        dataOK = false;
    } else if (numberCount < 3) {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.add("display");
        dataOK = false;
    } else {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.remove("display");
    }

    if (newPassword2Entered.length === 0) {
        hint_newPassword2_empty.classList.add("display");
        hint_newPassword2_unmatch.classList.remove("display");
        dataOK = false;
    } else if (newPassword2 !== newPassword) {
        hint_newPassword2_empty.classList.remove("display");
        hint_newPassword2_unmatch.classList.add("display");
        dataOK = false;
    } else {
        hint_newPassword2_empty.classList.remove("display");
        hint_newPassword2_unmatch.classList.remove("display");
    }

    if (dataOK) {
        console.log("Successfully Changed Password");
    }

})

//---------------------------------------------------------------------------------------
// Delete Account
//---------------------------------------------------------------------------------------




