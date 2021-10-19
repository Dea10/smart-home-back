const { Router } = require('express');
const { getDevices } = require('../controllers/devices');

const router = Router();

router.get('/', getDevices);

module.exports = router;