const cors = require('cors');
const express = require('express');

require("dotenv").config();
require("./database").connect();



const app = express();
app.use(express.json());
app.use(cors());

module.exports = app;