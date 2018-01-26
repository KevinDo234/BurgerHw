const express = require("express")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")

const port = process.env.port || 3500

const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Import routes and give the server access to them.
let routes = require("./controllers/burger_controller.js")

app.use(routes)

app.listen(port, function() {
    console.log("App now listening at localhost:" + port)
})