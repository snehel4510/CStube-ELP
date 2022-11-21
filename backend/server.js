const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const userRoutes = require('./routes/user_routes');

const app = express();

// this middleware will parse the request body while sending data to the server via a POST/PUT/PATCH request
app.use(express.json());

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// registering the routes
// app.use('/api/workouts',workoutRoutes)
app.use('/cstube/user',userRoutes)

const port = process.env.PORT;
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to the database,Server is running on port ${port}`);
        });
    })
    .catch(err => console.error(err));

