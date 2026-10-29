<?php

session_start();

require 'database.php';

$username = $_POST['login_member_username'];
$password = $_POST['login_member_password'];

$checkSQL = $database->prepare("SELECT memberID, memberPassword FROM tMember WHERE memberUsername = ?");
$checkSQL->bind_param("s", $username);
$checkSQL->execute();

$checkResult = $checkSQL->get_result();
$member = $checkResult->fetch_assoc();

if ($member && password_verify($password, $member['memberPassword'])) {
    $_SESSION['memberID'] = $member['memberID'];
    header("Location: ../template1.html");

    //setcookie('login_member_username', $_POST['login_member_username'], time() + 60*60);
    exit;
} else {
    header("Location: ../account_login.html?error=1");
    exit;
}

//if (isset($_COOKIE['login_member_username'])) {
//    $currentLoggedInMember = $_COOKIE['login_member_username'];
//}

?>