const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express()
var bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config()
var jsonParser = bodyParser.json()
const getCandidateData=require('./routes/GetData.js');
const postCandidateData=require('./routes/PostData');
const updateCandidateData=require('./routes/PutData');
const deleteCandidateData=require('./routes/DeleteData');
let port=process.env.PORT || 5000;
mongoose.connect("Mongodb URL",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});
mongoose.connection.once('open',()=>{
    console.log("Connected to DB");
})
app.use(cors());
app.get('/getPersonData',jsonParser,getCandidateData.getData)
app.post('/addPersonData',jsonParser,postCandidateData.postData)
app.put('/updatePersonData/:id',jsonParser,updateCandidateData.putData)
app.delete('/deletePersonData/:id',jsonParser,deleteCandidateData.DeleteData)
app.listen(port,()=>{
    console.log("Port Active");
})
