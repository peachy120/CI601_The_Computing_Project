<?php

require 'database.php';

header ('Content-Type: application/json');

$date = $_GET['date'];

$numberOfTableBooked = $database->prepare("SELECT COUNT(*) FROM tBooking WHERE type = 'TABLE' AND date = ?");
$numberOfTableBooked->bind_param('s', $date);
$numberOfTableBooked->execute();

$numberOfTableBookedResult = $numberOfTableBooked->get_result();
$numberOfTableBookedList = $numberOfTableBookedResult->fetch_assoc();

$numberOfTableRemaining = 114 - $numberOfTableBookedResult;

echo json_encode($numberOfTableRemaining);

?>