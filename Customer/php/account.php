<?php

session_start();

require 'database.php';

header("Content-Type: application/json");

if (!isset($_SESSION['memberID'])) {
    echo json_encode(["error" => "not_logged_in"]);
    exit;
}

$memberID = $_SESSION['memberID'];

$getDetailsSQL = $database->prepare("SELECT memberID, firstname, lastname, dateOfBirth, email, tel, tier, joinedDate, username FROM tMember WHERE memberID = ?");
$getDetailsSQL->bind_param("i", $memberID);
$getDetailsSQL->execute();

$getDetailsResult = $getDetailsSQL->get_result();
$member = $getDetailsResult->fetch_assoc();

echo json_encode($member);

?>