<?php

require $_SERVER['DOCUMENT_ROOT'] . "src/controller/mysqlhandler.php";

/**
 * Class Fill : SQLConnexion
 */
abstract class CoreFill extends SQLConnexion
{
    private
        $m_db;

    public function __construct()
    {
        $this->m_db = parent::__construct("mysql",
            "localhost",
            "test",
            "root",
            "root");
    }

    /**
     * @param $property
     * @return mixed
     */
    public function __get($property)
    {
        if (property_exists($this, $property)) {
            return $this->$property;
        }
    }

    /**
     * @param $name
     * @param $value
     * @return $this
     */
    public function __set($name, $value)
    {
        if (property_exists($this, $name)) {
            $this->$name->$value;
        }
        return $this;
    }

//    public function loadchilds()
//    {
//        self:::();
//        $this->buildagenda();
//    }

}