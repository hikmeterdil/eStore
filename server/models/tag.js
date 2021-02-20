const {model, Schema, Types} = require('mongoose');

const thisSchema = new Schema({
    category: {type: Types.ObjectId, ref: 'Category'},
    name: {type: String, required: true}
});

module.exports = model('Tag', thisSchema);