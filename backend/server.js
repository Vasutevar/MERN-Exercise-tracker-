const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();                 //configures env variables

const app = express();
const port = process.env.PORT || 5000;  //server port

app.use(cors());                    //middleware
app.use(express.json());            //allows us to pass json [send and receive ] 

const uri = process.env.ATLAS_URI;                    //database connection
mongoose.connect(uri , { useNewUrlParser : true  });

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
})
                                
const exercisesRouter = require('./routes/exercises');  
const usersRouter = require('./routes/users');

app.use('/exercises' , exercisesRouter);    //route path and its functionality
app.use('/users', usersRouter);

app.listen(port, ()=>{
     console.log(`Server is running on port: ${port}`);   //starts the server
})