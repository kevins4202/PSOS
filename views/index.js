import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) =>{
    const today = new Date();
    const year = today.getFullYear();
    console.log(year);
    res.render("index.ejs", {
        y: year
    });
});

app.get("/aboutus", (req, res) =>{
    res.render("aboutus.ejs")
});


app.get("/events", (req, res) =>{
    res.render("events.ejs")
});


app.get("/getinvolved", (req, res) =>{
    res.render("getinvolved.ejs")
});

app.get("/blog", (req, res) =>{
    res.render("blog.ejs")
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});