const express = require('express');
const router = express.Router();
const {getLocation,postLocation} = require('../Controller/locationController');

router.get('/:userId', getLocation);
router.post('/',postLocation);


module.exports = router;