const {model, Schema, Types} = require('mongoose');

const thisSchema = new Schema({
    category:{type: Types.ObjectId, ref: 'Category'},
    tags: [{type:Types.ObjectId, ref:'Tag'}],
    name: {type: String, required: true},
    price: {type: Number, required: true},
    currency: {type: String, required: true},
    details: {type: String, required: true},
    images: [{url:String, uuid:String}]
});

module.exports = model('Product', thisSchema);