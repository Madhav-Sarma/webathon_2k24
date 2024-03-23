//create author api app
const exp=require('express')
const authorApp=exp.Router()
const expressasynchandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const verifyToken=require('../middlewares/verifyToken')

let recipecollection;
authorApp.use((req,res,next)=>{
    authorscollection=req.app.get('authorscollection')
    recipecollection=req.app.get('recipecollection')
    next()
})

authorApp.post('/author',expressasynchandler(async(req,res)=>{
    //get resourse from client
    const newUser=req.body;
    //check for duplicate based on username
    const dbuser=await authorscollection.findOne({username:newUser.username})
    //if user found in DB
    if (dbuser!=null){
        res.send({message:"user existed"})
    }else{
        //hash the password
        const hashedPassword=await bcryptjs.hash(newUser.password,6)
        //replace the password with hashed password
        newUser.password=hashedPassword;
        //create user
        await authorscollection.insertOne(newUser)
        //send response
        res.send({message:"user Created"})
    }
}))

authorApp.post('/login',expressasynchandler(async(req,res)=>{
    //get cred obj from client
    const userCred=req.body;
    //check for username
    const dbuser=await authorscollection.findOne({username:userCred.username})
    if(dbuser===null){
        res.send({message:"invalid user"})
    }else{
        //check for password
        const status=await bcryptjs.compare(userCred.password,dbuser.password)
        if(status===false){
            res.send({message:"invalid password"})
        }else{
            //create jwt token
            const signedToken=jwt.sign({username:dbuser.username},process.env.SECRET_KEY,{expiresIn:'24h'})
            //send res
            res.send({message:"login success",token:signedToken,user:dbuser})
        }
    }
}))

authorApp.post('/recipe',expressasynchandler(async(req,res)=>{
    //get new recipe from client
    const newRecipe=req.body
    //post to recipe collection
    await recipecollection.insertOne(newRecipe)
    res.send({message:"New recipe added"})
    console.log(newRecipe)
}))


//modify recipie by author
authorApp.put('/recipe',expressasynchandler(async(req,res)=>{
    //get modified recipe from client
    const modifiedRecipe=req.body;
    //update by recipe Id
    let result=await recipecollection.updateOne({articleId:modifiedRecipe.articleId},{$set:{...modifiedRecipe}})
    console.log(result)
    res.send({message:"Article modified"})
}))

//deleting article
authorApp.put('/recipe/:articleId', expressasynchandler(async (req, res) => {
    // Get article id
    const articleIdFromUrl = req.params.articleId;
    // Get article 
    const articleToDelete = req.body;
    // Update status of the article
    await recipecollection.updateOne({ articleId: articleIdFromUrl }, { $set: { ...articleToDelete, status: "false" } });
    res.send({ message: "Article Removed" });
}));


//read article of author
authorApp.get('/recipe/:username',expressasynchandler(async(req,res)=>{
    //author's uername from url
    const authorName=req.params.username;
    const recipeList=await recipecollection.find({status:true,username:authorName}).toArray()
    res.send({message:"List of recipes",payload:recipeList})
}))



module.exports=authorApp;