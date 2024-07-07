import express from "express";

const pp = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.render("index.ejs");
});