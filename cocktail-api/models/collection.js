const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    recipes: {
        type: Array
    },
    // post: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post',
    // },
}, {timestamps: true});

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;