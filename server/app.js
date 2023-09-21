'use strict'

const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
const router = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', router);

app.listen(port, ()=> {
    console.log(`app listen on port ${port}`);
});

module.exports = app;