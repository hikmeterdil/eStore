const express = require('express');
const {check} = require('express-validator');

const router = express.Router();

const {getCategories, newCategory} = require("./category.controller");

router.get("/", getCategories);
router.post("/", [ check('name').not().isEmpty(), check('details').not().isEmpty(), check('image').not().isEmpty()], newCategory);

router.get('/', (req, res)=>{
    res.send("Hello");
});

module.exports = router;