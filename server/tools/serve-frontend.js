const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./frontend/build"));

app.use((req, res)=>{
    res.sendFile(path.resolve("./frontend/build/index.html"));
});

module.exports = app;