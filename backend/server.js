const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config()

const userRoutes = require('./routes/user_routes');
const dashRoutes = require('./routes/dash_routes');

const app = express();

// this middleware will parse the request body while sending data to the server via a POST/PUT/PATCH request
app.use(express.json());

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// registering the routes
app.use('/cstube/dash',dashRoutes)
app.use('/cstube/user',userRoutes)

// servbing the build folder
app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*" , (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})


// mongodb://localhost:27017/CSTUBE
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to the database,Server is running on port ${port}`);
        });
    })
    .catch(err => console.error(err));

