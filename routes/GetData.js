const CandidateModel=require('../models/CandidateModel')
exports.getData=(req,res)=>{
    CandidateModel.find({ }).then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>{
        res.status(400).json(err);
    })
}