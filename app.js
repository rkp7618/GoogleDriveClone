const express=require('express')
const userRouter=require('./routes/user.routes')
const dotenv=require('dotenv')
dotenv.config();
const cookieParser=require('cookie-parser')
const indexRouter=require('./routes/index.routes')

const app=express()

const connectToDB=require('./config/db')
connectToDB();
// iss niche wle line k liye index.ejs bnaye 
app.set('view engine','ejs')
// This line lets your app read JSON data in the request.

app.use(cookieParser())

app.use(express.json())
// This line lets your app read form data (like what you get when someone submits an HTML form).
app.use(express.urlencoded({extended:true}))

app.use('/',indexRouter)
app.use('/user',userRouter)


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})