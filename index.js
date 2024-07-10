import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

const today = new Date();
const year = today.getFullYear();
console.log(year);

app.get("/", (req, res) =>{
    res.render("index.ejs", {
        currYear: year
    });
});

app.get("/aboutus", (req, res) =>{
    res.render("aboutus.ejs", {
        currYear: year
    })
});


app.get("/events", (req, res) =>{
    res.render("events.ejs", {
        currYear: year
    })
});


app.get("/getinvolved", (req, res) =>{
    res.render("getinvolved.ejs", {
        currYear: year
    })
});

app.get("/blog", (req, res) =>{
    res.render("blog.ejs", {
        currYear: year
    })
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});