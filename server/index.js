import express from 'express'
import Connection from './Database/db.js';
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express()

Connection()
const PORT = 8000;
app.listen(PORT, ()=>console.log("Server is running successfully on", PORT))