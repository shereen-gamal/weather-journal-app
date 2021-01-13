// Setup empty JS object to act as endpoint for all routes
projectData = {};
// at first we install npm packages like(express , body-parser , cors) 
// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3210 ;
app.listen(port,()=>{
    console.log('server is running on port:', port)
});
 
// post route
app.post('/addData',(req,res)=>{
    projectData.temp = req.body.main.temp ;
    projectData.date = newDate;
    projectData.content =  feelling ;
})

// get route
app.get ('/data', (req,res)=>{
    res.send(projectData);
})