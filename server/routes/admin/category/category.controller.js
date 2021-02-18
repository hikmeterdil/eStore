const {validationResult} = require('express-validator');
const Category = require('../../../models/category');

const getCategories = async (req, res)=>{
    const placeId = req.params.pid;
    let categories;
    try{
        categories = await Category.find();
    } catch {
        return next(new HttpError('Could not find Categories', 500));
    }

    res.json({categories});
};

const newCategory = async (req, res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs detected.', 422));
    }

    // req.body
    // {
    //     "name":"Jamy",
    //     "details":"J-a-m-y",
    //     "image":"smt.png"
    // }
    
    let category;
    try{
        category = await Category.create(req.body); 
    } catch {
        return next(new HttpError('Unable to create a new Category', 500));
    }
    res.json({category});
};

module.exports = { getCategories, newCategory };