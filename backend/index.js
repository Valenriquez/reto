import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "10.14.255.54",
  user: "root",
  password: "Tec$2023",
  database: "vidaplena",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});


app.get("/", (req, res) => {
  res.json("Hello, this is the backend");
});


app.get("/api/search", (req, res) => {
  const query = req.query.query;
  const sqlQuery = `
  SELECT CONCAT(p.first_name, ' ', p.last_name) AS full_name
  FROM person AS p  
  JOIN pam AS pam ON pam.person_id = p.person_id
  WHERE CONCAT(p.first_name, ' ', p.last_name) LIKE '%${query}%'
  `;

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error("Error executing the search query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    res.json(results);
  });
});
 

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});