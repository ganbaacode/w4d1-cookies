const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.set("views", "views");
app.set("view engine", "ejs");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("addCookie", {
        cookies: req.cookies
    })
})

app.post("/", (req, res) => {
    let key = req.body.key;
    let value = req.body.value;

    if (key && value) {
        res.cookie(key, value);
    }
    res.redirect("/");


})

app.listen(3000, (req, res) => {
    console.log("server is running...");
})

