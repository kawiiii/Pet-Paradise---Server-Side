const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ListingSchema = new mongoose.Schema({
    name:String,
    email:String,
    desc:String,
    age:Number,
    petType:String,
    address:String
})

module.exports = mongoose.model('Listings', ListingSchema);