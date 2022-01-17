const mongoose= require('mongoose');

const evaluationsschema = new mongoose.Schema(

    {
        title:{
            type:"string", 
            required,
        },
        created_by :{
            type:mongoose.Schema.Types.ObjectId ,
            ref:"user",
            required: true,
            
        },
        
       start_date : {
            type:"date",
             required:true,
            },

            end_date: {
                type:"date",
             required:true ,
            },
    },
    {
        versionkey:false,
        timestamps:true,  
    }
)
const Evaluation=mongoose.model('evaluation',evaluationsschema);

module.exports=Evaluation;

