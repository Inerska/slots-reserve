<?php


/**
 * Class Agenda : Fill
 */
class AgendaFill extends CoreFill
{
    function buildagenda()
    {
        $this->query("
                            CREATE TABLE IF NOT EXISTS Agenda(
                                id_client 	tinyint unsigned not null,
                                slot		datetime not null,
                            
                                primary key(id_client),
                                foreign key(id_client) references Client(id)
                            );");
    }
}