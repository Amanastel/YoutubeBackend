// require('dotenv').config({ path: './.env' });
import dontenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';


dontenv.config({ 
    path: './.env' 
});


connectDB()
.then(() => {
   app.listen(process.env.PORT || 8000, () => {
       console.log(`Server running on port ${process.env.PORT}`)
   });
})
.catch((e) => {
    console.log(`MongoDB connection error: ${e}`);
    process.exit(1);
})















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