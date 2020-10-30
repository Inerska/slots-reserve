<?php


/**
 * Class SQLConnexion
 */
class SQLConnexion
{
    private
        $m_instance;

    public function __construct()
    {
        $config = require_once "../config/config.php";

        try {
            $this->m_instance = new PDO("{$config['type']}:host={$config['host']};dbname={$config['db']}", $config['user'], $config['pass']);
            $this->m_instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->m_instance->exec('set names utf8');
        } catch (Exception $exception) {
            print_r("Error during the mysql connexion : {$exception->getMessage()}.");
        }
    }

    public function __destruct()
    {
        $this->m_instance = null;
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

    /**
     * Prepare query to preventing from SQL injection
     * @param string $request
     * @param string $lvalue
     * @param mixed $rvalue & (passed by reference !)
     * @param mixed $rvalue_t
     * @return bool|PDOStatement
     */
    public function query($request, $lvalue = null, &$rvalue = null, $rvalue_t = null)
    {
        $buffer = $this->m_instance->prepare($request);
        if (!(is_null($lvalue) || is_null($rvalue_t) || is_null($rvalue_t)))
            $buffer->bindParam($lvalue, $rvalue, $rvalue_t);
        $buffer->execute();
        return $buffer;
    }
}