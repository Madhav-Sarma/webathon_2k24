const exp=require('express')
const commomApp=exp.Router()


commomApp.get('/common',(req,res)=>{
    res.send({message:'reply from common app'})
})



module.exports=commomApp;