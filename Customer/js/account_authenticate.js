fetch("../Customer/php/account_sessionStatus.php", {
    credentials: "include"
})

    .then(response => response.json())
    .then(data => {
        const account = document.querySelector(".menu_option.hide_in_mobile.account");

        const loginLogoutButton = document.querySelector(".login_logout_button");

        if (data.logged_in) {
            account.classList.add("display");

            loginLogoutButton.textContent = "Log out";
            loginLogoutButton.onclick = () => window.location.href = "../Customer/php/account_logout.php";

        } else {
            account.classList.remove("display");

            loginLogoutButton.textContent = "Login";
            loginLogoutButton.onclick = () => window.location.href = "../Customer/account_login.html";

        }
    })