<?php

session_start();

require 'database.php';

$username = $_POST['login_member_username'];
$password = $_POST['login_member_password'];

// Check does Username exists
$checkUsernameExistsSQL = $database->prepare("SELECT * FROM tMember WHERE memberUsername = ?");
$checkUsernameExistsSQL->bind_param("s", $username);
$checkUsernameExistsSQL->execute();

$checkUsernameExistsResult = $checkUsernameExistsSQL->get_result();

if ($checkUsernameExistsResult->num_rows === 1) {
    echo json_encode(["username_exists" => true]);
} else {
    echo json_encode(["username_exists" => false]);
}

// Check Is password correct
$checkUsernamePasswordMatchSQL = $database->prepare("SELECT memberID, memberPassword FROM tMember WHERE memberUsername = ?");
$checkUsernamePasswordMatchSQL->bind_param("s", $username);
$checkUsernamePasswordMatchSQL->execute();

$checkUsernamePasswordMatchResult = $checkUsernamePasswordMatchSQL->get_result();
$member = $checkUsernamePasswordMatchResult->fetch_assoc();

if ($member && password_verify($password, $member['memberPassword'])) {
    $_SESSION['memberID'] = $member['memberID'];
    header("Location: ../template1.html");

    setcookie('login_member_username', $_POST['login_member_username'], time() + 60*60);
    exit;
} else {
    header("Location: ../account_login.html?error=1");
    exit;
}

?>