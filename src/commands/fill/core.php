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
        parent::__construct();
    }

    public function __destruct()
    {
        parent::__destruct();
    }

    /**
     * Create a new table within the database
     * @param string $table
     * @param string $content
     */
    public static function up($table, $content)
    {
        parent::query("CREATE TABLE IF NOT EXISTS {$table}({$content});");
    }

    /**
     * Drop table if exists
     * @param string $table
     */
    public static function down($table)
    {
        parent::query("DROP TABLE IF EXISTS {$table};");
    }

}