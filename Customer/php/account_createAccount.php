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

    $checkSQL = $database->prepare("SELECT memberID, password FROM tMember WHERE username = ?");
    $checkSQL->bind_param("s", $username);
    $checkSQL->execute();

    $checkResult = $checkSQL->get_result();

    $checkResponse = ["username_exists" => true];

    if ($checkResult->num_rows === 0) {

        $checkResponse["username_exists"] = false;

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);    

        $insertSQL = $database->prepare("INSERT INTO tMember (title, firstname, lastname, dateOfBirth, email, tel, tier, username, password, joinedDate)
                                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $insertSQL->bind_param('ssssssssss', $title, $firstname, $lastname, $dob, $email, $tel, $tier, $username, $hashed_password, $joinedDate);

        if ($insertSQL -> execute()) {
            $insertSQL->insert_id;
        } else {
            echo "Error: " . $insertSQL->error;
        }
    } else {
        $checkResponse["username_exists"] = true;
    }
    
}

header("Content-Type: application/json");
echo json_encode($checkResponse);
exit;

?>