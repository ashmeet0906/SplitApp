
const mongoose = require('mongoose');

const url = 'mongodb+srv://ashmeet0906:Kaur@2003@spilltrcluster.glcynhe.mongodb.net/?retryWrites=true&w=majority';
const mongoDB = async()=>{ 
    await mongoose.connect(url,()=>{
        console.log("connected");
});
}
//this is a js file. 
module.exports = mongoDB;
