const express = require('express');
const {check} = require('express-validator');

const {getProducts, newProduct} = require("./product.controller");
const {notAcceptable} = require("../../../shared/status.controller");

const router = express.Router();

router.get("/", getProducts);

router.post("/", 
    //[ check('name').not().isEmpty(), check('details').not().isEmpty(), check('image').not().isEmpty()], 
    newProduct);

router.use(notAcceptable);

module.exports = router;