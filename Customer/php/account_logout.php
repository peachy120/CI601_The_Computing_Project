<?php

session_start();

session_destroy();
setcookie('login_member_username', '', time() - 60*60, '/');

header("Location: ../home.html");

exit;

?>