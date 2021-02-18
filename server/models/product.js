const {model, Schema, Types} = require('mongoose');

const thisSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    currency: {type: String, required: true},
    details: {type: String, required: true},
    images: [String]
});

module.exports = model('Product', thisSchema);