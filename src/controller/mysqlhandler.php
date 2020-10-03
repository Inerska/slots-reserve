<?php


/**
 * Class SQLConnexion
 */
class SQLConnexion
{
    private
        $m_type,
        $m_host,
        $m_db,
        $m_user,
        $m_pass,
        $m_instance;

    /**
     * MysqlConnexion constructor.
     *
     * Returns a new PDO instance.
     * @param string $type
     * @param string $host
     * @param string $db
     * @param string $user
     * @param string $pass
     */
    public function __construct($type = "mysql", $host = "localhost", $db, $user, $pass)
    {
        $this->m_type = $type;
        $this->m_host = $host;
        $this->m_db = $db;
        $this->m_user = $user;
        $this->m_pass = $pass;

        try {
            $this->m_instance = new PDO("{$type}:host={$host};dbname={$db}", $user, $pass);
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
     * @param T $rvalue
     * @param VAL_T $rvalue_t
     */
    public function query($request, $lvalue = null, $rvalue = null, $rvalue_t = null)
    {
        $buffer = $this->m_instance->prepare($request);
        if (!(is_null($lvalue) || is_null($rvalue_t) || is_null($rvalue_t)))
            $buffer->bindParam($lvalue, $rvalue, $rvalue_t);
        $buffer->execute();
    }
}