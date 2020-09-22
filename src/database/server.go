package database

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

func EtablishSQLConnexion(host string, userid string, password string, driver string, dbname string) *sql.DB {
	db, err := sql.Open(driver, fmt.Sprintf("%s:%s@/%s", userid, password, dbname))
	if err != nil {
		panic(err.Error())
	}
	_, _ = db.Exec("CREATE database if not exists hello")
	return db
}
