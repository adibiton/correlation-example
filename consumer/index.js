'use strict';

const express = require('express');

const correlation = require('express-correlation-id');
const app = express();
app.use(correlation());


app.get('/sum', (req, res, next) => {
    console.log(`In consumer: ${req.correlationId()}`);
});



app.listen(8082);
