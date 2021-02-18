const express = require('express');

const adminRoutes = require('./admin');
const storeRoutes = require('./store');
const fileRoutes = require('./file');

const { notAcceptable } = require('../shared/status.controller');

const router = express.Router();

router.use('/admin', adminRoutes);

router.use('/files', fileRoutes);

router.use('/store', storeRoutes);

router.use(notAcceptable);

module.exports = router;