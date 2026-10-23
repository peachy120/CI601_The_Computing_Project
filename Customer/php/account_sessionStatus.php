<?php

header("Access-Control-Allow-Origin: https://knc23.brighton.domains/CI601TheComputingProject");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

session_start();

header('Content-Type: application/json');
echo json_encode([
    "logged_in" => isset($_SESSION['memberID'])
]);

?>