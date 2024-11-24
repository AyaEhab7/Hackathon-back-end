const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    customer_name: {
        type: String,
        required: true
    },
    segment: {
        type: String,
        required: true
    },
}, { timestamps: true });

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
module.exports = mongoose.model('Customer', customerSchema);
