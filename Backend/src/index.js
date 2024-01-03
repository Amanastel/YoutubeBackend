// require('dotenv').config({ path: './.env' });
import dontenv from 'dotenv';

// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';
import connectDB from './db/index.js';


dontenv.config({ 
    path: './.env' 
});
connectDB()














/*

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`,);
        app.on("erro", (error) => {
            console.log('Server running on port 4000')
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        });
    } catch (e) {
        console.log(e);

    }
})()

*/