<?php


class MysqlConnexion
{
    private
        $m_type,
        $m_host,
        $m_db,
        $m_user,
        $m_pass,
        $m_instance;

    public function __construct($type, $host, $db, $user, $pass)
    {
        $m_type = $type;
        $m_host = $host;
        $m_db = $db;
        $m_user = $user;
        $m_pass = $pass;
        try {
            $this->m_instance = new PDO("{$type}:host={$host};dbname={$db}", $user, $pass);
        } catch (Exception $exception) {
            print_r("Error during the mysql connexion : {$exception->getMessage()}.");
        }
    }
}