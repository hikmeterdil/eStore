const {validationResult} = require('express-validator');
const Category = require('../../../models/category');
const Product = require('../../../models/product');

const getProducts = async (req, res)=>{
    const placeId = req.params.pid;
    let categories;
    try{
        categories = await Category.find();
    } catch {
        return next(new HttpError('Could not find Categories', 500));
    }

    res.json({categories});
};

const newProduct = async (req, res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs detected.', 422));
    }

    let category;
    try{
        category = await Category.create(req.body); 
    } catch {
        return next(new HttpError('Unable to create a new Category', 500));
    }
    res.json({category});
};

const updateCategory = async (req, res) => {};

const deleteCategory = async (req, res) => {};

module.exports = { getProducts, newProduct };