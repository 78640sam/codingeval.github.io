
const mongoose= require('mongoose');
const UserSchema = new mongoose.Schema(
    {
  name:{type:"string", required:true},
  email:{type:"string", required:true},
  password:{type:"string", required:true},
  profile_photo_url:{type:"string", required:false},
  role:{type:"string", required:false},
 },
    
{

  versionkey:false,
  timestamps:true,
  }
);

const User=mongoose.model('user',UserSchema);
module.exports=User;






