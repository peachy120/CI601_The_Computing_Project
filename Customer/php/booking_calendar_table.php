<?php

require 'database.php';

header ('Content-Type: application/json');

$date = $_GET['date'];

$maxCapacityForCat = 52;
$maxCapacityForDog = 41;

$remaingAvabilityWithCat = $maxCapacityForCat;
$remaingAvabilityWithDog = $maxCapacityForDog;

$bookingWithCat = $database->prepare("SELECT COUNT(*) FROM tBooking WHERE with = 'CAT' AND type = 'TABLE' AND date = ?");
$bookingWithCat->bind_param('s', $date);
$bookingWithCat->execute();

$bookingWithCat->bind_result($bookedWithCat);
$bookingWithCat->fetch();
$bookingWithCat->close();

$remaingAvabilityWithCat = $maxCapacityForCat - $bookedWithCat;


$bookingWithDog = $database->prepare("SELECT COUNT(*) FROM tBooking WHERE with = 'DOG' AND type = 'TABLE' AND date = ?");
$bookingWithDog->bind_param('s', $date);
$bookingWithDog->execute();

$bookingWithDog->bind_result($bookedWithDog);
$bookingWithDog->fetch();
$bookingWithDog->close();

$remaingAvabilityWithDog = $maxCapacityForDog - $bookedWithDog;


echo json_encode(["remainingAvabilityWithCat" => $remaingAvabilityWithCat,
                    "remainingAvabilityWithDog" => $remaingAvabilityWithDog]);

?>