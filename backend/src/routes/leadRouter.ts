import express from 'express'
const leadRouter=express.Router();
import * as leadController from "../controllers/leadController.js";
// leadRouter.get("/",leadController.getAllLeads);
leadRouter.post("/",leadController.createLead);

export default leadRouter;