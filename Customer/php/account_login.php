<?php

session_start();

require 'database.php';

$username = $_POST['login_member_username'];
$password = $_POST['login_member_password'];

$checkSQL = $database->prepare("SELECT memberID, password FROM tMember WHERE username = ?");
$checkSQL->bind_param("s", $username);
$checkSQL->execute();

$checkResult = $checkSQL->get_result();
$member = $checkResult->fetch_assoc();

$checkResponse = ["username_exists" => false,
                  "username_password_match" => false];

if ($member) {

    $checkResponse["username_exists"] = true;

    if (password_verify($password, $member['password'])) {
    
        $checkResponse["username_password_match"] = true;

        $_SESSION['memberID'] = $member['memberID'];

        setcookie('login_member_username', $username, time() + 60*60, '/');

    }
}

header("Content-Type: application/json");
echo json_encode($checkResponse);
exit;

?>