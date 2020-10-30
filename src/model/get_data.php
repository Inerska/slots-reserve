<?php

include "../controller/inputguard.php";
require_once "../controller/mysqlhandler.php";

// Guard
date_default_timezone_set("Europe/Paris");

// Create SQL Connexion
$db = new SQLConnexion();

$request = $db->query("SELECT * FROM agenda WHERE 1");

echo json_encode($request->fetchAll(PDO::FETCH_ASSOC));