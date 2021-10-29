const express = require('express');
const router = express.Router();

const {getAllPlaces, addNewPlace} = require('../Controller/places'); 

router.route('/').get(getAllPlaces).post(addNewPlace)

module.exports = router;