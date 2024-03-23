// Create express application
const express = require('express');
const app = express();
require('dotenv').config(); // Add .env property
const mongoClient=require('mongodb').MongoClient;
const path=require('path')
//deploy react build in this server
app.use(express.static(path.join(__dirname,'../client/build')))
// To parse req body
app.use(express.json());

//connect to DB
mongoClient.connect(process.env.DB_URL)
.then(client=>{
    //get database obj
    const recipe=client.db('recipe')
    //get collection obj
    const userscollection=recipe.collection('userscollection')
    const authorscollection=recipe.collection('authorscollection')
    const recipecollection=recipe.collection('recipecollection')
    //share collection obj
    app.set('userscollection',userscollection)
    app.set('recipecollection',recipecollection)
    app.set('authorscollection',authorscollection)
    //confirm DB connection status
    console.log('DB Connection success')
})
.catch(err=>console.log("err in DB Collection"))


// Import API routes
const userApp = require('./API/user-api');
const authorApp = require('./API/author-api');
const adminApp = require('./API/admin-api');

// If path starts with '/user-api', send req to userApp
app.use('/user-api', userApp);
// If path starts with '/author-api', send req to authorApp
app.use('/author-api', authorApp);
// If path starts with '/admin-api', send req to adminApp
app.use('/admin-api', adminApp);


// Error handling middleware
app.use((err, req, res, next) => {
    
    res.json({ message: "Internal Server Error" , payload: err.message});
});

// Assign port number
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Web server running on port ${port}`));
