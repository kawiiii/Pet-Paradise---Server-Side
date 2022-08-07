const cors = require('cors');
const express = require('express');
const { db } = require('./Listings');

const Listing = require('./Listings');

require("dotenv").config();
require("./database").connect();


const uploadData = async (req, res) => {
    const data = req.body;
    const pet = await Listing.create(data);
    console.log(pet);
    res.status(200).send();
}


const getData = async (req,res) => {
    const allListings = await Listing.find();
    console.log(allListings);
    res.status(200).send( {listings : allListings})
}


const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.static(__dirname, 'public'));

// const upload = multer({storage});


app.post('/add-listing', uploadData);
app.post('/get-all-listings', getData);

module.exports = app;