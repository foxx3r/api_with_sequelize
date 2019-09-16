const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const Post = require("../model/Post")

// config
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))

// routes
app.get("/", (req, res, next) => {
  Post.findAll().then( (posts) => {
    res.render("pages/home", { posts: posts })
    })
})

app.get("/register", (req, res, next) => {
  res.render("pages/register")
})

app.post("/register", (req, res, next) => {
  Post.create({
    name: req.body.name,
    age: req.body.age,
    description: req.body.description
  }).then( () => {
    res.redirect("/")
  }).catch( (err) => {
    res.send("An error has occured")
  })
})

module.exports = app
