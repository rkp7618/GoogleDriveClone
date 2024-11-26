const mongoose=require('mongoose')
const { trim } = require('validator')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        minlength:[3,'User must be at least 3 character long']
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[13,"Email must be atleast 13 charachters long"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        lowercase:false,
        unique:false,
        minlength:[5,"Password must be atleast 5 charachters long"]        
    }
})
const user=mongoose.model('user',userSchema)
module.exports=user;