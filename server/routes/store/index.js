const express = require('express');

const {notAcceptable} = require("../../shared/status.controller");

const router = express.Router();

// const adminRoutes = require('./admin');
// const storeRoutes = require('./store');

// router.use('/admin', adminRoutes);

// router.use('/store', storeRoutes);

router.use(notAcceptable);

module.exports = router;