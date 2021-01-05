const mongoose=require('mongoose');
let Schema=mongoose.Schema;
var CandidateSchema=new Schema({
    name:{type:String,required:true,index:true},
    experience:{type:String,required:true},
    education:{
        course:{type:String},
        specialization:{type:String},
        university:{type:String}
    },
    currentcity:{type:String},
    currentcountry:{type:String,default:"India"},
    mobilenumber:{type:String},
    email:{type:String},
    createdDate:{type:String,required:true},
});
const Candidatexp=mongoose.model('Candidate',CandidateSchema);
module.exports=Candidatexp;
