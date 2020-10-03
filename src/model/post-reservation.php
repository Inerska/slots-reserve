<?php


include "../controller/inputguard.php";
require "../controller/mysqlhandler.php";

$ig = new InputGuard(file_get_contents('php://input'));
$handler = new SQLConnexion("mysql",
    "localhost",
    "test",
    "root",
    "root");

$handler->query("CREATE TABLE IF NOT EXISTS Client(
	id		tinyint unsigned not null auto_increment,
	firstname	varchar(35),
	lastname	varchar(35),
	phone		int zerofill,
	mail		varchar(255),
	activity	varchar(255),
	bapteme		bit(1),

	primary key(id)
);");
