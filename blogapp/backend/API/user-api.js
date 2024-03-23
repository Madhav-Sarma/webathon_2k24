//create user api app
const exp=require('express')
const userApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressasynchandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const verifyToken=require('../middlewares/verifyToken')
const commomApp=require('./common-api')

let usercollection;
let recipecollection;
//get usercoleection app
userApp.use((req,res,next)=>{
    usercollection=req.app.get('userscollection')
    recipecollection=req.app.get('recipecollection')
    next()
})

//user registration route
userApp.post('/user',expressasynchandler(async(req,res)=>{
    //get resourse from client
    const newUser=req.body;
    //check for duplicate based on username
    const dbuser=await usercollection.findOne({username:newUser.username})
    //if user found in DB
    if (dbuser!=null){
        res.send({message:"user existed"})
    }else{
        //hash the password
        const hashedPassword=await bcryptjs.hash(newUser.password,6)
        //replace the password with hashed password
        newUser.password=hashedPassword;
        //create user
        await usercollection.insertOne(newUser)
        //send response
        res.send({message:"user Created"})
    }
}))


//user login
userApp.post('/login',expressasynchandler(async(req,res)=>{
    //get cred obj from client
    const userCred=req.body;
    //check for username
    const dbuser=await usercollection.findOne({username:userCred.username})
    if(dbuser===null){
        res.send({message:"invalid user"})
    }else{
        //check for password
        const status=await bcryptjs.compare(userCred.password,dbuser.password)
        if(status===false){
            res.send({message:"invalid password"})
        }else{
            //create jwt token
            const signedToken=jwt.sign({username:dbuser.username},process.env.SECRET_KEY,{expiresIn:20})
            //send res
            res.send({message:"login success",token:signedToken,user:dbuser})
        }
    }
}))

//getarticles of all users
userApp.get('/recipes',verifyToken,expressasynchandler(async(req,res)=>{
    //get recipes collection from express app
    const recipecollection=req.app.get('recipecollection')
    //get all recipes
    let recipes=await recipecollection.find().toArray()
    //send res
    res.send({message:"recipes",paload:recipes})
}))

//post commentby artilce id
userApp.post('/comment/:articleId',verifyToken, expressasynchandler(async (req, res) => {
    const userComment = req.body;
    const articleIdfromurl=req.params.articleId
    // Insert userComment obj to comments array of article
    await recipecollection.updateOne(
        { articleId: articleIdfromurl},
        { $addToSet: { comments: userComment } }
    );
    res.send({ message: "Comment added" });
}));


module.exports=userApp;