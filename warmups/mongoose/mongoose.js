//all documents inside this collection will look the same. 

var mongoose = require("mongoose");

var puppySchema = mongoose.Schema({
    name: String,
    age: Number,
    breed: String
    fixed: Boolean
});

module.exports = mongoose.model("nameofmodel", puppySchema);