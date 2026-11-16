<?php

require 'database.php';

header('Content-Type: application/json');

$yearMonth = $_GET['yearMonth'];


$tableBooked = $database->prepare("SELECT date FROM tBooking WHERE type = 'TABLE' AND DATE_FORMAT(date, '%Y-%m') = ?");

$tableBooked->bind_param("s", $yearMonth);
$tableBooked->execute();

$tableBookedResult = $tableBooked->get_result();
$tableBookedList = $tableBookedResult->fetch_all(MYSQL_ASSOC);

echo json_encode($tableBookedList);


$roomBooked = $database->prepare("SELECT date FROM tBooking WHERE type='ROOM' AND DATE_FORMAT(date, '%Y-%m') = ?");

$roomBooked->bind_param("s", $yearMonth);
$roomBooked->execute();

$roomBookedResult = $roomBooked->get_result();
$roomBookedList = $roomBookedResult->fetch_all(MYSQL_ASSOC);

echo json_encode($roomBookedList);


$floorBooked = $database->prepare("SELECT date FROM tBooking WHERE type = 'FLOOR' AND DATE_FORMAT(date, '%Y-%m') = ?");

$floorBooked->bind_param("s", $yearMonth);
$floorBooked->execute();

$floorBookedResult = $floorBooked->get_result();
$floorBookedList = $floorBookedResult->fetch_all(MYSQL_ASSOC);

echo json_encode($floorBookedList);


?>