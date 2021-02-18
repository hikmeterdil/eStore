const express = require('express');
const {check} = require('express-validator');

const {getCategories, newCategory} = require("./category.controller");
const {notAcceptable} = require("../../../shared/status.controller");

const router = express.Router();

router.get("/", getCategories);

router.post("/", [ check('name').not().isEmpty(), check('details').not().isEmpty(), check('image').not().isEmpty()], newCategory);

router.use(notAcceptable);

module.exports = router;