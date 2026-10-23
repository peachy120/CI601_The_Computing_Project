<?php

$servername = "brighton";
$username = "knc23_CI601_customer";
$password = "knc23_CI601_customer";
$db = "knc23_CI601";

$database = new mysqli($servername, $username,$password,$db);

if ($database->connect_error) {
    die("Connection failed: " . $database->connect_error);
}

?>