<?php

include "../controller/inputguard.php";
require_once "../controller/mysqlhandler.php";

// Guard
date_default_timezone_set("Europe/Paris");

// Create SQL Connexion
$db = new SQLConnexion();

$parse = InputGuard::parseRequest(file_get_contents('php://input'));
var_dump($parse);

$start_date = DateTime::createFromFormat('Y-m-d H:i', $parse["start"])->getTimestamp();
$end_date = DateTime::createFromFormat('Y-m-d H:i', $parse["end"])->getTimestamp();

$db->query("INSERT INTO agenda(description, cstart, cend)
                   VALUES('Permanence par {$parse["prename"]}', FROM_UNIXTIME({$start_date}), FROM_UNIXTIME({$end_date}))");