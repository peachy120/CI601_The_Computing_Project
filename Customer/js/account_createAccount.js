//---------------------------------------------------------------------------------------
// Create Member Account Form
//---------------------------------------------------------------------------------------

const createAccountMemberForm = document.querySelector("#createAccount_member_form");

const memberTitle = createAccountMemberForm.querySelector("#createAccount_member_title");
const memberFirstname = createAccountMemberForm.querySelector("#createAccount_member_firstname");
const memberLastname = createAccountMemberForm.querySelector("#createAccount_member_lastname");
const memberDoB = createAccountMemberForm.querySelector("#createAccount_member_dateOfBirth");
const memberEmail = createAccountMemberForm.querySelector("#createAccount_member_email");
const memberTel = createAccountMemberForm.querySelector("#createAccount_member_tel");
const memberUsername = createAccountMemberForm.querySelector("#createAccount_member_username");
const memberPassword = createAccountMemberForm.querySelector("#createAccount_member_password");
const memberPassword2 = createAccountMemberForm.querySelector("#createAccount_member_password2");

const hint_memberTitle_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_title_empty");
const hint_memberFirstname_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_firstname_empty");
const hint_memberLastname_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_lastname_empty");
const hint_memberDoB_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_dateOfBirth_empty");
const hint_memberDoB_invalid = createAccountMemberForm.querySelector("#hint_createAccount_member_dateOfBirth_invalid");
const hint_memberDoB_young = createAccountMemberForm.querySelector("#hint_createAccount_member_dateOfBirth_young");
const hint_memberEmail_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_email_empty");
const hint_memberEmail_invalid = createAccountMemberForm.querySelector("#hint_createAccount_member_email_invalid");
const hint_memberEmail_short = createAccountMemberForm.querySelector("#hint_createAccount_member_email_short");
const hint_memberTel_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_tel_empty");
const hint_memberTel_short = createAccountMemberForm.querySelector("#hint_createAccount_member_tel_short");
const hint_memberUsername_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_username_empty");
const hint_memberUsername_short = createAccountMemberForm.querySelector("#hint_createAccount_member_username_short");
const hint_memberUsername_existed = createAccountMemberForm.querySelector("#hint_createAccount_member_username_existed");
const hint_memberPassword_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_password_empty");
const hint_memberPassword_short = createAccountMemberForm.querySelector("#hint_createAccount_member_password_short");
const hint_memberPassword_noAZ = createAccountMemberForm.querySelector("#hint_createAccount_member_password_noAZ");
const hint_memberPassword_noNumber = createAccountMemberForm.querySelector("#hint_createAccount_member_password_noNumber");
const hint_memberPassword2_empty = createAccountMemberForm.querySelector("#hint_createAccount_member_password2_empty");
const hint_memberPassword2_unmtach = createAccountMemberForm.querySelector("#hint_createAccount_member_password2_unmatch");

const createAccount_button = createAccountMemberForm.querySelector("#createAccount_member_button");

createAccount_button.addEventListener("click", function(e) {

    e.preventDefault(e);

    title = memberTitle.value.trim();
    firstname = memberFirstname.value.trim();
    lastname = memberLastname.value.trim();
    dob = memberDoB.value.trim();
    email = memberEmail.value.trim();
    tel = memberTel.value.trim();
    username = memberUsername.value.trim();
    password = memberPassword.value.trim();
    password2 = memberPassword2.value.trim();

    let dataOK = true;

    if (title === "") {
        hint_memberTitle_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_memberTitle_empty.classList.remove("display");
    }

    if (firstname.length === 0) {
        hint_memberFirstname_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_memberFirstname_empty.classList.remove("display");
    }

    if (lastname.length === 0) {
        hint_memberLastname_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_memberLastname_empty.classList.remove("display");
    }

    const dobStr = new Date(dob);

    const todayDate = new Date();

    const atleast16Date = new Date();
    atleast16Date.setFullYear(todayDate.getFullYear() - 16);

    if (dob === "") {
        hint_memberDoB_empty.classList.add("display");
        hint_memberDoB_invalid.classList.remove("display");
        hint_memberDoB_young.classList.remove("display");
        dataOK = false;
    } else if (dobStr > todayDate) {
        hint_memberDoB_empty.classList.remove("display");
        hint_memberDoB_invalid.classList.add("display");
        hint_memberDoB_young.classList.remove("display");
        dataOK = false;
    } else if (dobStr > atleast16Date) {
        hint_memberDoB_empty.classList.remove("display");
        hint_memberDoB_invalid.classList.remove("display");
        hint_memberDoB_young.classList.add("display");
        dataOK = false;
    } else {
        hint_memberDoB_empty.classList.remove("display");
        hint_memberDoB_invalid.classList.remove("display");
        hint_memberDoB_young.classList.remove("display");
    }

    if (email.length === 0) {
        hint_memberEmail_empty.classList.add("display");
        hint_memberEmail_invalid.classList.remove("display");
        hint_memberEmail_short.classList.remove("display");
        dataOK = false;
    } else if (email.length !== 0 && email.length < 11){
        hint_memberEmail_empty.classList.remove("display");
        hint_memberEmail_invalid.classList.remove("display");
        hint_memberEmail_short.classList.add("display");
        dataOK = false;
    } else if(email.indexOf("@") < 1) {
        hint_memberEmail_empty.classList.remove("display");
        hint_memberEmail_invalid.classList.add("display");
        hint_memberEmail_short.classList.remove("display");
        dataOK = false;
    } else {
        hint_memberEmail_empty.classList.remove("display");
        hint_memberEmail_invalid.classList.remove("display");
        hint_memberEmail_short.classList.remove("display");
    }

    if (tel.length === 0) {
        hint_memberTel_empty.classList.add("display");
        hint_memberTel_short.classList.remove("display");
        dataOK = false;
    } else if (tel.length < 8) {
        hint_memberTel_empty.classList.remove("display");
        hint_memberTel_short.classList.add("display");
        dataOK = false;
    } else {
        hint_memberTel_empty.classList.remove("display");
        hint_memberTel_short.classList.remove("display");
    }

    if (username.length === 0) {
        hint_memberUsername_empty.classList.add("display");
        hint_memberUsername_short.classList.remove("display");
        hint_memberUsername_existed.classList.remove("display");
        dataOK = false;
    } else if (username.length !== 0 && username.lastname < 5) {
        hint_memberUsername_empty.classList.remove("display");
        hint_memberUsername_short.classList.add("display");
        hint_memberUsername_existed.classList.remove("display");
    } else {
        hint_memberUsername_empty.classList.remove("display");
        hint_memberUsername_short.classList.remove("display");
        hint_memberUsername_existed.classList.remove("display");
    }

    const findNumbers = password.match(/[0-9]/g);
    const numberCount = findNumbers ? findNumbers : 0;

    const findLetters = password.match(/[A-Za-z]/g);
    const letterCount = findLetters ? findLetters : 0;

    if (password.length === 0) {
        hint_memberPassword_empty.classList.add("display");
        hint_memberPassword_short.classList.remove("display");
        hint_memberPassword_noAZ.classList.remove("display");
        hint_memberPassword_noNumber.classList.remove("display");
        dataOK = false;
    } else if (password.length < 8) {
        hint_memberPassword_empty.classList.remove("display");
        hint_memberPassword_short.classList.add("display");
        hint_memberPassword_noAZ.classList.remove("display");
        hint_memberPassword_noNumber.classList.remove("display");
        dataOK = false;
    } else if (letterCount < 6) {
        hint_memberPassword_empty.classList.remove("display");
        hint_memberPassword_short.classList.remove("display");
        hint_memberPassword_noAZ.classList.add("display");
        hint_memberPassword_noNumber.classList.remove("display");
        dataOK = false;
    } else if (numberCount < 4) {
        hint_memberPassword_empty.classList.remove("display");
        hint_memberPassword_short.classList.remove("display");
        hint_memberPassword_noAZ.classList.remove("display");
        hint_memberPassword_noNumber.classList.add("display");
        dataOK = false;
    } else {
        hint_memberPassword_empty.classList.remove("display");
        hint_memberPassword_short.classList.remove("display");
        hint_memberPassword_noAZ.classList.remove("display");
        hint_memberPassword_noNumber.classList.remove("display");
    }

    if (password2.length === 0) {
        hint_memberPassword2_empty.classList.add("display");
        hint_memberPassword2_unmtach.classList.remove("display");
        dataOK = false;
    } else if (password2 !== password) {
        hint_memberPassword2_empty.classList.remove("display");
        hint_memberPassword2_unmtach.classList.add("display");
        dataOK = false;
    } else {
        hint_memberPassword2_empty.classList.remove("display");
        hint_memberPassword2_unmtach.classList.remove("display");
    }

    if (dataOK) {
        console.log("Title: " + title);
        console.log("Firstname: " + firstname);
        console.log("Lastname: " + lastname);
        console.log("Date Of Birth: " + dob);
        console.log("Email: " + email);
        console.log("Telephone Number: " + tel);
        console.log("Username: " + username);
        console.log("Password: " + password);
        console.log("Password2: " + password2);
    }
})