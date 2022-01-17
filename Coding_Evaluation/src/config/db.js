const mongoose=require('mongoose');

mongoose.export=()=>{
    return mongoose.connect(" mongodb://127.0.0.1:27017/user")
}