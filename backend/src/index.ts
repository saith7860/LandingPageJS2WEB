import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config'
const app:Express=express();
//file imports
import { connectDB,disconnectDB } from './config/db';

//cors
app.use(cors({
   origin: "https://landing-page-js-2-web.vercel.app",
  credentials: true
}));
//for json format data
app.use(express.json());

app.use(helmet());
//PORT
const PORT=process.env.PORT||3000;
app.listen(PORT,async()=>{
    try {
        await connectDB();
         console.log('app is listening on port',PORT);
    } catch (error) {
        console.log('error in starting the server',error);
        
    }
   
})
