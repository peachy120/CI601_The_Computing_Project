<?php

session_start();

session_destroy();

header("Location: ../template1.html");

exit;

?>