import express from 'express'
import Connection from './Database/db.js';
import dotenv from "dotenv"; // its allow to acces .en files data
import cors from 'cors' // its allow to share to server data
import bodyParser from 'body-parser'; // its allow to fontend json data in server (body)
import Route from './routes/route.js';

dotenv.config();

const app = express()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route)


app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

//connect to database
Connection()
const PORT = 8000;
app.listen(PORT, ()=>console.log("Server is running successfully on", PORT))

