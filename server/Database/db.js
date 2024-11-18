import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default Connection;
