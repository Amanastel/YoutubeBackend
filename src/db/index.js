import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


export const connectDB = async () => {
    try {
        const connectionIn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`,);
        console.log(`Connected to database: ${connectionIn.connection.host}`)
    } catch (e) {
        console.log(`Error connecting to database: ${e}`);
        process.exit(1);
    }
}

export default connectDB;