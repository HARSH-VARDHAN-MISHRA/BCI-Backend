const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryName :{
        type:String,
        required:[true,"Please Fill Category Name"]
    },
    productName :{
        type:String,
        required:[true,"Please Fill Product Name"]
    },
    productDesc :{
        type:String
    },
    productImage: {
        type:[String],
        required:[true,"Please Add Product Images"]
    },
    sizes:{
        type:String
    },
    material:{
        type:String
    },
    application:{
        type:String
    }
})

const productDetail = mongoose.model('productDetail', productSchema);
module.exports = productDetail;
