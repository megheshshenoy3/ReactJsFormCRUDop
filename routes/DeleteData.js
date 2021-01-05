const CandidateModel=require('../models/CandidateModel')
exports.DeleteData=(req,res)=>{
    CandidateModel.findByIdAndDelete(req.params.id).then(() =>
     res.json('Record Deleted.')).catch(err => res.status(400).json('Error: ' + err));
}