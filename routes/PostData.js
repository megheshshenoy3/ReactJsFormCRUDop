const CandidateModel=require('../models/CandidateModel')
exports.postData=(req,res)=>{
        console.log(req.body)
        const name=req.body.name;
        const experience=req.body.experience;
        const education=req.body.education;
        const currentcity=req.body.currentcity;
        const currentcountry=req.body.currentcountry;
        const mobilenumber=req.body.mobilenumber;
        const email=req.body.email
        const createdDate=req.body.createdDate
        
        const newCandidate=new CandidateModel({
            name,experience,education,currentcity,currentcountry,mobilenumber,email,createdDate
        })
        
        newCandidate.save().then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>{
            res.status(400).json(err);
        })
}