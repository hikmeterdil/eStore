const express = require('express');

const router = express.Router();

const adminRoutes = require('./admin');
const storeRoutes = require('./store');

router.use('/admin', adminRoutes);

router.use('/store', storeRoutes);

module.exports = router;