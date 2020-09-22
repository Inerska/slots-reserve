package database

import (
	"database/sql"
	"fmt"
)

func EtablishSQLConnexion(host string, userid string, password string, driver string, port int) *sql.DB{
	db, err := sql.Open(driver, fmt.Sprintf("%s:%s@tcp(%s:%d)/", userid, password, host, port))
	if err != nil{
		panic(err)
	}
	return db
}
