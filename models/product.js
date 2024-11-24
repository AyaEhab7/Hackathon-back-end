const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    sustainable:{
        type: String,
        required: true
    },
}, 
);

module.exports = mongoose.model('Product', productSchema);
