const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    recipes: {
        type: Array,
        default: []
    },
}, {timestamps: true});

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;