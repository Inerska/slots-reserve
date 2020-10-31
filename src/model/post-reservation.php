<?php

include "../controller/inputguard.php";
require_once "../controller/mysqlhandler.php";

// Guard
date_default_timezone_set("Europe/Paris");

// Create SQL Connexion
$db = new SQLConnexion();

// Create TABLE, etc.

// Client table

$db->query("CREATE TABLE IF NOT EXISTS Client(
	id		tinyint unsigned not null auto_increment,
	firstname	varchar(35) not null,
	lastname	varchar(35) not null,
	phone		int zerofill not null,
	mail		varchar(255) not null,
	activity	varchar(255) not null,
	bapteme		bit(1) not null,

	primary key(id)
);");

// Agenda table

$db->query("CREATE TABLE IF NOT EXISTS Agenda(
	id_client 	tinyint unsigned not null,
	description   varchar(255),
	cstart		datetime not null,
	cend		    datetime not null,

	primary key(id_client),
	foreign key(id_client) references Client(id)
);");

$parse = InputGuard::parseRequest(file_get_contents('php://input'));
var_dump($parse);

// Sending new customer information
$bapteme = $parse["bapteme"] == 'true';

$db->query("INSERT INTO client(firstname, lastname, phone, mail, activity, bapteme)VALUES('{$parse["prename"]}', '{$parse["name"]}', {$parse["phone"]}, '{$parse["mail"]}', '{$parse["activity"]}', '{$bapteme}');");

// Just add a certain amount of minutes if the user has chosen bapteme and convert it to Timestamp time value
$start_date = DateTime::createFromFormat('Y-m-d H:i', $parse["date"])->getTimestamp();
$end_date = DateTime::createFromFormat('Y-m-d H:i', $parse["date"])->modify($bapteme ? '+20 minutes' : '+15 minutes')->getTimestamp();

// Link those information to agenda table
$db->query("INSERT INTO agenda(id_client, description, cstart, cend)
                   VALUES(LAST_INSERT_ID(), 'Sénce de {$parse["prename"]} {$parse["name"]}', FROM_UNIXTIME({$start_date}), FROM_UNIXTIME({$end_date}));");