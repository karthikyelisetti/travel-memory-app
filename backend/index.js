const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const conn = require("./utils/conn");

app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});