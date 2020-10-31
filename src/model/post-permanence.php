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

$db->query("INSERT INTO client(firstname, lastname, phone, mail, activity, bapteme)
                   VALUES('{$parse["author"]}', '{$parse["author"]}', 0000000000, '{$parse["author"]}', '{$parse["author"]}', '{$parse["author"]}');");
$db->query("INSERT INTO agenda(id_client, description, cstart, cend)
                   VALUES(LAST_INSERT_ID(),'Permanence par {$parse["author"]}', FROM_UNIXTIME({$start_date}), FROM_UNIXTIME({$end_date}))");