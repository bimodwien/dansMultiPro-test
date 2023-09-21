'use strict'

const router = require('express').Router();

function fetching() {
    fetch(`https://dev6.dansmultipro.com/api/recruitment/positions.json`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log('error');
        })
}

router.get('/data',fetching)


module.exports = router;