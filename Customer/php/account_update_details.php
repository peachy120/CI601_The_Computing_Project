<?php

session_start();

require 'database.php';

if (!isset($_SESSION['memberID'])) {
    echo json_encode(["error" => "not_logged_in"]);
    exit;
}

$memberID = $_SESSION['memberID'];

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    
    $title = $_POST['account_member_update_details_title'];
    $firstname = $_POST['account_member_update_details_firstname'];
    $lastname = $_POST['account_member_update_details_lastname'];
    $dob = $_POST['account_member_update_details_dateOfBirth'];
    $email = $_POST['account_member_update_details_email'];
    $tel = $_POST['account_member_update_details_tel'];
    $username = $_POST['account_member_update_details_username'];

    $checkSQL = $database->prepare("SELECT memberID, password FROM tMember WHERE username = ?");
    $checkSQL->bind_param("s", $username);
    $checkSQL->execute();

    $checkResult = $checkSQL->get_result();

    $checkResponse = ["username_exists" => true];

    if ($checkResult->num_rows === 0) {

        $checkResponse["username_exists"] = false;

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);    

        $updateSQL = $database->prepare("INSERT INTO tMember (title, firstname, lastname, dateOfBirth, email, tel, tier, username)
                                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $updateSQL->bind_param('ssssssss', $title, $firstname, $lastname, $dob, $email, $tel, $tier, $username);

        if ($updateSQL -> execute()) {
        } else {
            echo "Error: " . $updateSQL->error;
        }
    } else {
        $checkResponse["username_exists"] = true;
    }

}

header("Content-Type: application/json");
echo json_encode($checkSQLResponse);
exit;

?>