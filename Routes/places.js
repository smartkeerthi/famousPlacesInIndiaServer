const express = require('express');
const router = express.Router();

const {getAllPlaces} = require('../Controller/places'); 

router.route('/').get(getAllPlaces)

module.exports = router;