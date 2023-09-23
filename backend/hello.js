const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({message:"Hello from backend"})
});

app.listen(3000)