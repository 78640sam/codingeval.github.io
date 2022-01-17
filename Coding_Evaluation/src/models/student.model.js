
const mongoose= require('mongoose');
const studentSchema = new mongoose.Schema(
    {
  student_code:{type:"string", required:true},
  batch:{type:"string", required:true},
  current_status:{type:"string", required:true,default: "active"},
 
 },
    
{

  versionkey:false,
  timestamps:true,
  }
);

const Student=mongoose.model('student',studentSchema);
module.exports=Student;