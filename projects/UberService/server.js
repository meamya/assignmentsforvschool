var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join("public")));

app.use("/Inventory", require("./routes/Inventory"));

mongoose.connect("mongodb://localhost/Inventory", function() {
    console.log("Successfully connected to the database");
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});