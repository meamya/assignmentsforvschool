////app.post("/bounties", function(req, res) {
//    var bounty = req.body;
//    bounty.id = uuid.v4();
//    bounties.push(bounty);
//    res.send(bounty);
//})
var express = require("express")
var app = express
app.get("/", function (req, res) {}
        res.send("it works) 
            app.listen("/") listen(8000, function () {
                console.log("server is running on port 8000");
            });
            //var express = require("express");
            ////created code to execute new application
            //var app = express();
            ////this is how you tell your app how to take input 
            //var bodyParser = require("body-parser");
            //app.use(bodyParser.json())
            //    //it add req.body to all request
            //    //i am setting up the ability to accept get request. accept at the most root file
            //    //$http.get("http://localhost:8000/").then(function(response) {
            //    //  console.log(response.data)
            //    //}
            //app.get("/bounty", function (req, res) {
            //            res.send(allpuppies);
            //            //allow users to input data  //this is in the body of the request   
            //            app.post("/bounties", function (req, res) {
            //                puppies.push(req.body);
            //                res.send(req.body);
            //            });
            //            app.delete("/bounty/:", function (req, res) {
            //                console.log(req.params.puppyId);
            //            });
            //            //server is listening for new request