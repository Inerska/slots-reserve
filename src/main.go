package main

import (
	"./database"
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("static")))
	http.HandleFunc("/hey", func(writer http.ResponseWriter, request *http.Request) {
		db := database.EtablishSQLConnexion("localhost", "root", "", "mysql", "test")
		defer db.Close()
		insert, err := db.Query("CREATE TABLE IF NOT EXISTS users(id INT, NAME VARCHAR(50));")

		if err != nil {
			panic(err.Error())
		}
		defer insert.Close()
	})
	http.HandleFunc("/housekeeping", housekeepingHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func housekeepingHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/housekeeping/index.html")
	http.FileServer(http.Dir("app"))
}
