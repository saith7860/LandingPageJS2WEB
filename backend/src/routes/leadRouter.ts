import express from 'express'
const leadRouter=express.Router();
import * as leadController from "../controllers/leadController.js";
// leadRouter.get("/",leadController.getAllLeads);
leadRouter.post("/",leadController.createLead);
leadRouter.get("/",leadController.getAllLeads);

export default leadRouter;