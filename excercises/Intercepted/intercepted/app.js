//Write a middleware function in a separate JavaScript file that accepts the req, res, and next parameters, adds a property to the req, and allows the server to continue on with it's normal operation.


var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(intercept);

////Pull that module into your main server code and set it up as middleware. //Use Postman to make the GET request and test whether your middleware did its job.

app.use(function(res, ));

var intercept = function (req, res, next) {
  req.intercept = ()
  next()
}
res.send(response)

app.listen(8000, function() {
    console.log("Server is listening on port 8000");
});

//server to handle a GET request that returns an object (of any kind) as a response.

