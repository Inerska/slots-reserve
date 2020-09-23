package main

import (
	"./database"
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		http.ServeFile(writer, request, "static/index.html")
	})
	http.HandleFunc("/hey", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Hey")
		db := database.EtablishSQLConnexion("localhost", "root", "", "mysql", "test")
		defer db.Close()
		insert, err := db.Query("CREATE TABLE IF NOT EXISTS users(id INT, NAME VARCHAR(50));")

		if err != nil {
			panic(err.Error())
		}
		defer insert.Close()
	})
	http.HandleFunc("/housekeeping", func(writer http.ResponseWriter, request *http.Request) {
		http.ServeFile(writer, request, "static/housekeeping/index.html")
	})
	log.Fatal(http.ListenAndServe(":8080", nil))
}
