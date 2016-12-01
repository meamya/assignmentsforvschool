var express = require("express");
var conciergeRouter = express.Router();
var Item = require("../item/Inventory");

conciergeRouter.get("/", function(req, res) {

Item.find(function(err, item) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(item);
        }
    });
});

conciergeRouter.get("/:itemId", function(req, res) {
   
    Item.findById(req.params.itemId, function(err, item) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(item);
        }
    });
});

conciergeRouter.post("/", function(req, res) {
    var item = new item(req.body);
    item.save(function(err, newItem) {
        if (err) {
            res.status(500).send(err);
        } else {           
            res.send(newItem);
        }
    });
});

conciergeRouter.put("/:itemId", function(req, res) {
    item.findByIdAndUpdate(
        req.params.itemId, 
        req.body, 
        {new: true},
        function(err, newItem) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newItem);
        }
    });
});

conciergeRouter.delete("/:itemId", function(req, res) {
    Item.findByIdAndRemove(req.params.itemId, function(err, soldItem) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(soldItem);
        }
    });
});


module.exports = conciergeRouter;