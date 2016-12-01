//npm init is the first thing you do it creates the new file.
//npm install - downloads the package
//use for databases, host 
//npm init ///make sure you are in the right file. 
//npm install--save (creates a dependency and keep a record of )
//to create a local server
//REST - representaional State
//api design or endpoint design (nouns > verbs)
// /puppies instead of get-all-puppies
app.listen(8000, function () {
        console.log("listening to port 8000...");
});

var express = require("express");
        //created code to execute new application
var app = express();
        //this is how you tell your app how to take input 
var bodyParser = require("body-parser"); 
app.use(bodyParser.json());

var uuid =  require("uuid");
        //it add req.body to all request
        //i am setting up the ability to accept get request. accept at the most root file
        //$http.get("http://localhost:8000/").then(function(response) {
        //  console.log(response.data)
        //}
app.get("/", function (req, res) {
    console.log(req.body);
    console.log(req.params);
})

////
res.send(allpuppies);
                //allow users to input data  //this is in the body of the request   
                app.post("/puppies", function (req, res) {
                    puppies.push(req.body);
                    res.send(req.body);
                });
                app.delete("/puppies/:puppyID", function (req, res) {
                    console.log(req.params.puppyId);
                });
                //server is listening for new request
                app.listen(8000, function () {
                    console.log("server is running on port 8000");
                });
                //we will use req.params, req.quiry, req.method, req.body, req.url
            
    ///