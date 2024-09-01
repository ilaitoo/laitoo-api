const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
//connect database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "053419mM",
  database: "myapp",
});
const promisePool = pool.promise();
//
app.get("/", async (req, res) => {
  res.send(`Welcom to my api home page`);
});
app.get("/users", async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM users");
    console.log(rows);
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
app.post("/data", async (req, res) => {
  console.log(req.query);
  const { name, pass } = req.body;
  console.log(name, pass);
  try {
    const [result] = await promisePool.query(
      "INSERT INTO users (name, password) VALUES (?, ?)",
      [name, pass]
    );
    console.log("inserted");
    res.status(200).json({ id: result.insertId, name, pass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to insert data" });
  }
});
app.listen(3002, () => {
  console.log(`Server running at http://localhost:${3002}/`);
});
console.log("hi");
