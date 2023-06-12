import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    ip: "10.14.255.54",
    user: "admin01",
    password: "Tec$2023",
    database: "vidaplena"
})

app.get("/", (req, res)=>{
    res.json("hello, this is the backend")
})

app.listen(8000, ()=>{
    console.log("Connected to the backend")
    
})
