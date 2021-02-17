const {model, Schema, Types} = require('mongoose');

const thisSchema = new Schema({
    name: {type: String, required: true},
    details: {type: String, required: true},
    image: {type: String, required: true}
});

module.exports = model('Category', thisSchema);