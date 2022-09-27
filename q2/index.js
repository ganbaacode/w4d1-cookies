const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const sessions = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000);
app.set("view engine", "ejs");
app.set("views", "views");


app.use(sessions({
    secret: "hi this is secret"
}));

app.use(require("flash")());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/output", (req, res) => {
    res.send(`Welcome ${req.session.name} , cant believe that you are ${req.session.age} years old`);
});


app.post("/", (req, res) => {

    req.session.name = req.body.name;
    req.session.age = req.body.age;
    res.redirect("/output");


});
