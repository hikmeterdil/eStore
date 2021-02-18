const express = require('express');

const categoryRoutes = require('./category');
const {notAcceptable} = require("../../shared/status.controller");

const router = express.Router();

router.use('/category', categoryRoutes);

router.use(notAcceptable);

module.exports = router;