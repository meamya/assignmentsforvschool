var express = require('express');
var app = express()
var mongoose = (require("body-parser");
var path = require("path");
app.use(express.static("frontend"));
var uuid = require('uuid');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.join(public)));

//var cors = require('cors');
//to open a new db go to mongod, then rs(for restart, 

mongoose.connect("mongodb://localhost/", function ()){
                 console.log("successful connected to database")
                 });
app.use(function(res, res, next){
    res.send("Hello World! I am middleware!"); 
});

var bounties = [
    {
        firstName: "Snake",
        lastName: "Hip",
        living: "true",
        amount: "$100,000",
        type: "Sith",
        id: uuid.v4()
    }];

app.get("/bounties", function (req, res) {
    res.send(bounties)
});

app.post("/bounties", function (req, res) {
var bounty = req.body;
bounty.id = uuid.v4();
bounties.push(bounty);
res.send(bounty);
});

// save the url param req.<p>You can use the mark tag to <mark>highlight</mark> text.</p>
arams.id

// find the object that has the matching id

// replace that object with the updated object that was sent (req.body)

// send back the deleted object

//update bounty

app.put("/bounties/:bountyId", function(req, res){
    for (var i=0; i < bounties.length; i++){
        if(bounties[i].id === req.params.bountyId){
                bounties[i] = req.body;
                return res.send(req.body);
        }  
    } 
    res.send(" We couldn't find a bounty with the specified ID");
});

//delete one 
app.delete("/bounties/:bountyId", function(req, res){
        for (var i =0; i < bounties.length; i++){
        if(bounties[i].id === req.params.bountyId){
            var deleted = bounties[i];
            bounties.splice(i, 1);
            return res.send(deleted);
        }
    }
    
}); 

// save the url param req.params.id

// find the object that has the matching id

// splice / cut out that object from the id

// send back the deleted object

app.listen(8000, function () {
    console.log('App is listening at port 8000!')
});