<?php

session_start();

require 'database.php';

if (!isset($_SESSION['memberID'])) {
    echo json_encode(["error" => "not_logged_in"]);
    exit;
}

$memberID = $_SESSION['memberID'];

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    
    $currentPassword = $_POST['account_member_change_password_current_password'];
    $newPassword = $_POST['account_member_change_password_new_password'];
    $newPassword2 = $_POST['account_member_change_password_new_password2'];

    $checkSQL = $database->prepare("SELECT password FROM tMember WHERE memberID = ?");
    $checkSQL->bind_param("s", $memberID);
    $checkSQL->execute();

    $checkSQLResult = $checkSQL->get_result();
    $password = $chechSQLResult->fetch_assoc();

    $checkSQLResponse = ["password_match" => true];

    if (password_verify($currentPassword, $password['password'])) {

        $checkSQLResponse["password_match"] = true;

    }

}

header("Content-Type: application/json");
echo json_encode($checkSQLResponse);
exit;

?>