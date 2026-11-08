//---------------------------------------------------------------------------------------
// Displays Members Details
//---------------------------------------------------------------------------------------

fetch("../Customer/php/account_details.php", {
    credentials: "include"
})

.then(response => response.json())
.then(data => {
    if (data.error === "not_logged_in") {
        window.location.href = "../Customer/account_login.html";
        return;
    }

    const id = document.querySelector("#account_member_id");
    const firstname = document.querySelector("#account_member_firstname");
    const lastname = document.querySelector("#account_member_lastname");
    const dob = document.querySelector("#account_member_dateOfBirth");
    const email = document.querySelector("#account_member_email");
    const tel = document.querySelector("#account_member_tel");
    const tier = document.querySelector("#account_member_tier");
    const joinedDate = document.querySelector("#account_member_joined_date");
    const username = document.querySelector("#account_member_username");

    id.textContent = data.memberID;
    firstname.textContent = data.firstname;
    lastname.textContent = data.lastname;
    dob.textContent = data.dateOfBirth;
    email.textContent = data.email;
    tel.textContent = data.tel;
    tier.textContent = data.tier;
    joinedDate.textContent = data.joinedDate;
    username.textContent = data.username;
})