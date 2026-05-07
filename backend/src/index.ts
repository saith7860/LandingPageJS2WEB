import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
// import helmet from 'helmet';
import 'dotenv/config'
const app:Express=express();
//file imports
import { connectDB } from './config/db.js';
import campaignRouter from './routes/campaignRouter.js';
import { handleError } from './middlewares/errorHandler.js';
import leadRouter from './routes/leadRouter.js';
//routes

//cors
app.use(cors());
//for json format data
app.use(express.json());

// app.use(helmet());
//PORT
const PORT=process.env.PORT||5000;
app.get("/",(req,res)=>{
    console.log(req.method, req.url);
    res.send("server is running")
    
})
app.use("/api/campaign",campaignRouter);
app.use("/api/lead",leadRouter);

app.use(handleError);
app.listen(PORT,async()=>{
    try {
        await connectDB();
         console.log('app is listening on port',PORT);
    } catch (error) {
        console.log('error in starting the server',error);
        
    }
   
})
