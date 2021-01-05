"use strict";
const CandidateModel=require('../models/CandidateModel')
 exports.putData=(req,res)=>{
    CandidateModel.findById(req.params.id).then(candrecord=>{
        console.log(req.body)
        console.log(candrecord.education.course)
         candrecord.name=req.body.name;
         candrecord.experience=req.body.experience;
         candrecord.education.course=req.body.education.course;
         candrecord.education.specialization=req.body.education.specialization;
         candrecord.education.university=req.body.education.university;
         candrecord.currentcity=req.body.currentcity;
         candrecord.currentcountry=req.body.currentcountry;
         candrecord.mobilenumber=req.body.mobilenumber;
         candrecord.email=req.body.email;
         candrecord.save().then(()=>{
             console.log("Record Updated Successfully")
             res.json("Record Updated Successfully")
        }).catch(err=>{
            res.status(400).json(err)
        });
    })
   
 }