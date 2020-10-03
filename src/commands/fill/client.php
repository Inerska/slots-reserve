<?php

require "../../controller/mysqlhandler.php";
require "../../controller/inputguard.php";

/**
 * Class ClientFill : Fill
 */
class ClientFill extends CoreFill
{

    function buildchild()
    {
        $this->query("CREATE TABLE IF NOT EXISTS Client(
                                id		tinyint unsigned not null auto_increment,
                                firstname	varchar(35) not null,
                                lastname	varchar(35) not null,
                                phone		int zerofill not null,
                                mail		varchar(255) not null,
                                activity	varchar(255) not null,
                                bapteme		bit(1) not null,
                            
                                primary key(id)
                            );"
        );
    }

}