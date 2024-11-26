
const express=require('express')
const router=express.Router();
const upload=require('../config/multer.config')
const fileModel=require('../models/files.models')
const authMiddleWare=require('../middlewares/authe')

router.get('/home',authMiddleWare,(req,res)=>{
    res.render('home')
})

router.post('/upload',authMiddleWare,upload.single('file'),async(req,res)=>{
    const newFile=await fileModel.create({
        path:req.file.path,
        originalname:req.file.originalname,
    })
})


module.exports=router