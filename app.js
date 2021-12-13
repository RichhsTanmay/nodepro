require("./src/db/conn")
const student = require('./src/modals/student');
const express = require('express');
const router = require("./src/routes/userrouter");
const app = express();
app.use(express.json());
app.use(router);


module.exports = app;