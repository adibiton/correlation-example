'use strict'

const correlator = require('express-correlation-id');
const express = require('express');
const utils = require('./utils');
const app = express();
app.use(correlator());


app.get('/', (req, res) => {
	console.log(`${req.correlationId()}`);
	console.log(`${correlator.getId()}`);
	if(req.query.num){
			let sum = utils.add5(req.query.num);
			res.json({total: sum});
	}
	res.end();
});

app.listen(process.env.PORT || 8081);
