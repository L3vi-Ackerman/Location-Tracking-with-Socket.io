require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./Database/connectDB');
const locationRoutes = require('./Router/locationRouter');
const userRoutes = require('./Router/userRouter');

const port = process.env.PORT || 3000;

app.use(express.json());
connectDB();
app.use('/user',userRoutes);
app.use('/location',locationRoutes);
app.listen(port,()=>{
    console.log('Listening to port: ',3000)
});