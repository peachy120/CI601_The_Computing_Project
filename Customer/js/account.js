fetch("../Customer/php/account.php", {
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
    firstname.textContent = data.memberFirstname;
    lastname.textContent = data.memberLastname;
    dob.textContent = data.memberDateOfBirth;
    email.textContent = data.memberEmail;
    tel.textContent = data.memberTel;
    tier.textContent = data.memberTier;
    joinedDate.textContent = data.memberJoinedDate;
    username.textContent = data.memberUsername;
})