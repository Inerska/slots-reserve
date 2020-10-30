<?php

include "../controller/inputguard.php";
require_once "../controller/mysqlhandler.php";

// Guard
date_default_timezone_set("Europe/Paris");

// Create SQL Connexion
$db = new SQLConnexion();

$parse = InputGuard::parseRequest(file_get_contents('php://input'));
var_dump($parse);