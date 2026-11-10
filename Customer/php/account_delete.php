<?php

session_start();

require 'database.php';

if (!isset($_SESSION['memberID'])) {
    echo json_encode(["error" => "not_logged_in"]);
    exit;
}

$memberID = $_SESSION['memberID'];

if ($_SERVER['REQUEST_METHOD'] === "DELETE") {

    $deleteSQL = $database->prepare("FROM tMember WHERE memberID = ?");
    $deleteSQL->bind_param("s", $memberID);
    $deleteSQL->execute();

    $deleteResult = $deleteSQL->get_result();

    if ($deleteResult) {
        
        session_destroy();

        setCookie($memberID, '', time() - 60 * 60, '/');

        header("Location: ../home.html");

        exit;
    } else {
        echo "Error: " . $deleteSQL->error;
    }
}

?>