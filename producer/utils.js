'use strict';

const request = require('request');
const correlation = require('correlation-id');

function utils() {
    function add5(num) {

        const options = {
								url: 'http://localhost:8082/sum',
            headers: {
                'x-correlation-id': correlation.getId()
            }
        };
        request(options, (error, body, response) => {
            console.log('after request');
        });
        return 4;
        //        console.log(correlation.getId());
        //      return 5 + parseInt(num);
    }
    return {
        add5: add5
    }
}
module.exports = utils();
