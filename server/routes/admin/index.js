const express = require('express');

const router = express.Router();

const categoryRoutes = require('./category');

router.use('/category', categoryRoutes);

router.get('/', (req, res)=>{
    res.send("Hello");
});

module.exports = router;