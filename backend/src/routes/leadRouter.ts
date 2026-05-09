import express from 'express'
const leadRouter=express.Router();
import * as leadController from "../controllers/leadController.js";
import validate from '../middlewares/validationMiddleware.js';
import leadValidator from '../validators/leadValidator.js';
// leadRouter.get("/",leadController.getAllLeads);
leadRouter.post("/",validate(leadValidator),leadController.createLead);
leadRouter.get("/",leadController.getAllLeads);

export default leadRouter;