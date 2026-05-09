import express from 'express'
const campaignRouter=express.Router();
import validate from '../middlewares/validationMiddleware.js';
import campaignValidator from '../validators/campaignValidator.js';
import * as campaignController from "../controllers/campaignController.js";
campaignRouter.get("/",campaignController.getAllCampaigns);
campaignRouter.get("/specific",campaignController.getSpecificCampaign);
campaignRouter.post("/",validate(campaignValidator),campaignController.postCampaign);
campaignRouter.put("/specific",campaignController.editCampaign);
campaignRouter.delete("/specific",campaignController.deleteCampaign);
export default campaignRouter;