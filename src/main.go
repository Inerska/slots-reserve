package main

import (
	"./database"
	"github.com/prometheus/common/log"
	"net/http"
)

func main() {
	log.Fatal(http.ListenAndServe(":8080", http.FileServer(http.Dir("./static"))))

	db := database.EtablishSQLConnexion("localhost", "root", "root", "mysql", 8080)
	_ = db.Close()
}
