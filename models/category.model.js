const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName :{
        type:String,
        required:[true,"Please Fill Category Name"]
    },
    categoryImage:{
        type:String,
        required:[true,"Please Add Image"]
    }
})

const categoryDetail = mongoose.model('categoryDetail', categorySchema);
module.exports = categoryDetail;
