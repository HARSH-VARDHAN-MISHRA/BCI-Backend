const mongoose = require('mongoose');

exports.connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOURL);
        console.log("Bharat Connecting Succesfully !!");
    } catch (error) {
        console.log("Error : ",error);
    }
}