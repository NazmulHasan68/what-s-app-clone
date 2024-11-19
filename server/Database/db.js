import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let gfs;

const Connection = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("MongoDB Connected");

        // Once connected, initialize GridFSBucket
        const conn = mongoose.connection;
        conn.once('open', () => {
            const { GridFSBucket } = mongoose.mongo;
            gfs = new GridFSBucket(conn.db, { bucketName: 'fs' });
        });

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default Connection;

