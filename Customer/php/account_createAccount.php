<?php

session_start();

require 'database.php';    

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $title = $_POST['createAccount_member_title'];
    $firstname = $_POST['createAccount_member_firstname'];
    $lastname = $_POST['createAccount_member_lastname'];
    $dob = $_POST['createAccount_member_dateOfBirth'];
    $email = $_POST['createAccount_member_email'];
    $tel = $_POST['createAccount_member_tel'];
    $tier = 'BRONZE';
    $username = $_POST['createAccount_member_username'];
    $password = $_POST['createAccount_member_password'];
    $joinedDate = date('Y-m-d');

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $insertSQL = $database->prepare("INSERT INTO tMember (memberTitle, memberFirstname, memberLastname, memberDateOfBirth, memberEmail, memberTel, memberTier, memberUsername, memberPassword, memberJoinedDate)
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $insertSQL->bind_param('ssssssssss', $title, $firstname, $lastname, $dob, $email, $tel, $tier, $username, $lastname, $joinedDate);

    if ($insertSQL -> execute()) {
        $_SESSION['memberID'] = $insertSQL->insert_id;
        header("Location: ../account_login.html");
        exit;
    } else {
        echo "Error: " . $insertSQL->error;
    }
}

?>