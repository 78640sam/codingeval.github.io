const mongoose= require('mongoose');

const submissionsschema = new mongoose.Schema(

    {
      
        evaluation_id :{
            type:mongoose.Schema.Types.ObjectId ,
            ref:"evaluation",
            required: true,
            
        },
        answered_by:{
            type:mongoose.Schema.Types.ObjectId ,
            ref:"student",
            required: true,
            
        },
        status:{
            type:string,
            required:true,
            default:"Pending"
        },
        submission_time:{
            type:Date,
            required:true,
           
        },
        score:{
            type:number,
            required:false,
        },
        assessed_by:{
            type:mongoose.Schema.Types.ObjectId ,
            ref:"evaluation",
            required: true,
            
        },
        submission_link:{
            type:string,
            required:true
        },


    },
    {
        versionkey:false,
        timestamps:true,  
    }
)
const Submissions =mongoose.model('submissions',submissionschema);

module.exports=Submissions;