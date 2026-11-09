//---------------------------------------------------------------------------------------
// Button in left_column
//---------------------------------------------------------------------------------------

const accountDetailsArea = document.querySelector("#account_details_area");
const updateDetailsArea = document.querySelector("#update_details");
const changePasswordArea = document.querySelector("#change_password");

const leftColumn_accountDetails_button = document.querySelector("#left_column_account_details_button");
const leftColumn_updateDetails_button = document.querySelector("#left_column_update_details_button");
const leftColumn_changePassword_button = document.querySelector("#left_column_change_password_button");

leftColumn_accountDetails_button.addEventListener("click", function(e) {

    e.preventDefault();

    accountDetailsArea.classList.add("display");
    updateDetailsArea.classList.remove("display");
    changePasswordArea.classList.remove("display");

})

leftColumn_updateDetails_button.addEventListener("click", function(e) {

    e.preventDefault();

    accountDetailsArea.classList.remove("display");
    updateDetailsArea.classList.add("display");
    changePasswordArea.classList.remove("display");

})

leftColumn_changePassword_button.addEventListener("click", function(e) {

    e.preventDefault();

    accountDetailsArea.classList.remove("display");
    updateDetailsArea.classList.remove("display");
    changePasswordArea.classList.add("display");

})

//---------------------------------------------------------------------------------------
// Getting Buttons and forms
//---------------------------------------------------------------------------------------

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

const title = updateDetailsForm.querySelector("#account_member_update_details_title");
const firstname = updateDetailsForm.querySelector("#account_member_update_details_firstname");
const lastname = updateDetailsForm.querySelector("#account_member_update_details_lastname");
const dob = updateDetailsForm.querySelector("#account_member_update_details_dateOfBirth");
const email = updateDetailsForm.querySelector("#account_member_update_details_email");
const tel = updateDetailsForm.querySelector("#account_member_update_details_tel");
const username = updateDetailsForm.querySelector("#account_member_update_details_username");

const hint_title_empty = updateDetailsForm.querySelector("#hint_account_member_update_details_title_empty");
const hint_firstname_empty = updateDetailsForm.querySelector("#hint_account_member_update_details_firstname_empty");
const hint_lastname_empty = updateDetailsForm.querySelector("#hint_account_member_update_details_lastname_empty");
const hint_dob_empty = updateDetailsForm.querySelector("#hint_account_member_update_details_dateOfBirth_empty");
const hint_dob_invalid = updateDetailsForm.querySelector("#hint_account_member_update_details_dateOfBirth_invalid");
const hint_dob_young = updateDetailsForm.querySelector("#hint_account_member_update_details_dateOfBirth_young");
const hint_email_empty = updateDetailsForm.querySelector("#hint_account_member_update_details_email_empty");
const hint_email_invalid = updateDetailsForm.querySelector("#hint_account_member_update_details_email_invalid");
const hint_email_short = updateDetailsForm.querySelector("#hint_account_member_update_details_email_short");
const hint_tel_empty = updateDetailsForm.querySelector("#hint_account_member_update_details_tel_empty");
const hint_tel_short = updateDetailsForm.querySelector("#hint_account_member_update_details_tel_short");
const hint_username_empty = updateDetailsForm.querySelector("#hint_account_member_update_details_username_empty");
const hint_username_short = updateDetailsForm.querySelector("#hint_account_member_update_details_username_short");
const hint_username_existed = updateDetailsForm.querySelector("#hint_account_member_update_details_username_existed");
const hint_username_same = updateDetailsForm.querySelector("#hint_account_member_update_details_username_same");

const updateDetailsFormButton = updateDetailsForm.querySelector("#account_member_update_details_form_button");

updateDetailsFormButton.addEventListener("click", async function(e) {

    e.preventDefault();

    titleSelected = title.value.trim();
    firstnameEntered = firstname.value.trim()
    lastnameEntered = lastname.value.trim();
    dobSelected = dob.value.trim();
    emailEntered = email.value.trim();
    telEntered = tel.value.trim();
    usernameEnterd = username.value.trim();

    let dataOK = true;

    if (titleSelected === "") {
        hint_title_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_title_empty.classList.remove("display");
    }

    if (firstnameEntered.length === 0) {
        hint_firstname_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_firstname_empty.classList.remove("display");
    }

    if (lastnameEntered.length === 0) {
        hint_lastname_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_lastname_empty.classList.remove("display");
    }

    const dobStr = new Date(dobSelected);

    const todayDate = new Date();

    const atLeast16Date = new Date();
    atLeast16Date.setFullYear(todayDate.getFullYear() - 16);

    if (dobSelected === "" ) {
        hint_dob_empty.classList.add("display");
        hint_dob_invalid.classList.remove("display");
        hint_dob_young.classList.remove("display");
        dataOK = false;
    } else if (dobStr > todayDate) {
        hint_dob_empty.classList.remove("display");
        hint_dob_invalid.classList.add("display");
        hint_dob_young.classList.remove("display");
        dataOK = false;
    } else if (dobSelected > atLeast16Date) {
        hint_dob_empty.classList.remove("display");
        hint_dob_invalid.classList.add("display");
        hint_dob_young.classList.remove("display");
        dataOK = false;
    } else {
        hint_dob_empty.classList.remove("display");
        hint_dob_invalid.classList.remove("display");
        hint_dob_young.classList.remove("display");
    }

    if (emailEntered.length === 0) {
        hint_email_empty.classList.add("display");
        hint_email_invalid.classList.remove("display");
        hint_email_short.classList.remove("display");
        dataOK = false;
    } else if (emailEntered.indexOf("@") < 1) {
        hint_email_empty.classList.remove("display");
        hint_email_invalid.classList.add("display");
        hint_email_short.classList.remove("display");
        dataOK = false;
    } else if (emailEntered.length !== 0 && emailEntered.length < 11) {
        hint_email_empty.classList.remove("display");
        hint_email_invalid.classList.add("display");
        hint_email_short.classList.remove("display");
        dataOK = false;
    } else {
        hint_email_empty.classList.remove("display");
        hint_email_invalid.classList.remove("display");
        hint_email_short.classList.remove("display");
    }

    if (telEntered.length === 0) {
        hint_tel_empty.classList.add("display");
        hint_tel_short.classList.remove("display");
        dataOK = false;
    } else if (telEntered.length < 8) {
        hint_tel_empty.classList.remove("display");
        hint_tel_short.classList.add("display");
        dataOK = false;
    } else {
        hint_tel_empty.classList.remove("display");
        hint_tel_short.classList.remove("display");
    }

    if (usernameEnterd.length === 0) {
        hint_username_empty.classList.add("display");
        hint_username_short.classList.remove("display");
        hint_username_existed.classList.remove("display");
        dataOK = false;
    } else if (usernameEnterd.length !== 0 && usernameEnterd.length < 5) {
        hint_username_empty.classList.remove("display");
        hint_username_short.classList.add("display");
        hint_username_existed.classList.remove("display");
        dataOK = false;
    } else {
        hint_username_empty.classList.remove("display");
        hint_username_short.classList.remove("display");
        hint_username_existed.classList.remove("display");
    }

    try {
        const updateDetailsFormData = new FormData(updateDetailsForm);

        const response = await fetch("../Customer/php/account_update_details.php", {
            method: "POST",
            body: updateDetailsFormData,
            credentials: "include"
        })

        const data = await response.json();

        if (data.username_exists && usernameEnterd.length !== 0) {
            hint_memberUsername_empty.classList.remove("display");
            hint_memberUsername_short.classList.remove("display");
            hint_memberUsername_existed.classList.add("display");
            dataOK = false;
        } else {
            hint_memberUsername_empty.classList.remove("display");
            hint_memberUsername_short.classList.remove("display");
            hint_memberUsername_existed.classList.remove("display");
        }
    } catch (error) {
        console.error(error);
    }

    if (dataOK) {

    }
        
})






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
const hint_newPassword_same = changePasswordForm.querySelector("#hint_account_member_change_password_new_password_same");
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

    const findNumbers = newPasswordEntered.match(/[0-9]/g);
    const numberCount = findNumbers ? findNumbers : 0;

    const findLetters = newPasswordEntered.match(/[A-Za-z]/g);
    const letterCount = findLetters ? findLetters : 0;

    if (newPasswordEntered.length === 0) {
        hint_newPassword_empty.classList.add("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.remove("display");
        hint_newPassword_same.classList.remove("display");
        dataOK = false;
    } else if (newPasswordEntered.length < 8) {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.add("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.remove("display");
        hint_newPassword_same.classList.remove("display");
        dataOK = false;
    } else if (letterCount < 5) {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.add("display");
        hint_newPassword_noNumber.classList.remove("display");
        hint_newPassword_same.classList.remove("display");
        dataOK = false;
    } else if (numberCount < 3) {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.add("display");
        hint_newPassword_same.classList.remove("display");
        dataOK = false;
    } else {
        hint_newPassword_empty.classList.remove("display");
        hint_newPassword_short.classList.remove("display");
        hint_newPassword_noAZ.classList.remove("display");
        hint_newPassword_noNumber.classList.remove("display");
        hint_newPassword_same.classList.remove("display");
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

        if (data.password === newPasswordEntered) {
            hint_newPassword_empty.classList.remove("display");
            hint_newPassword_short.classList.remove("display");
            hint_newPassword_noAZ.classList.remove("display");
            hint_newPassword_noNumber.classList.remove("display");
            hint_newPassword_same.classList.add("display");
            dataOK = false;
        } else {
            hint_newPassword_empty.classList.remove("display");
            hint_newPassword_short.classList.remove("display");
            hint_newPassword_noAZ.classList.remove("display");
            hint_newPassword_noNumber.classList.remove("display");
            hint_newPassword_same.classList.remove("display");
        }

    } catch(error) {
        console.error(error);
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




