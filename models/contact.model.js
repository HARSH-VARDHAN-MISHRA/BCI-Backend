const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    email_id:{
        type:String
    },
    address:{
        type:String
    }
}, {timestamps : true})

module.exports = mongoose.model('contactDetail',contactSchema)