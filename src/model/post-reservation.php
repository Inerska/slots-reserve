<?php

include "../controller/inputguard.php";
require_once "../controller/mysqlhandler.php";

$parse = new InputGuard(file_get_contents('php://input'));

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
	slot		datetime not null,

	primary key(id_client),
	foreign key(id_client) references Client(id)
);");


