<?php


include "../controller/inputguard.php";
include "../commands/fill/core.php";
require_once "../controller/mysqlhandler.php";

$parse = new InputGuard(file_get_contents('php://input'));
$db = new SQLConnexion();
