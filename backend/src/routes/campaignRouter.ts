import express from 'express'
const campaignRouter=express.Router();
import * as campaignController from "../controllers/campaignController.js";
campaignRouter.get("/",campaignController.getAllCampaigns);
campaignRouter.get("/specific",campaignController.getSpecificCampaign);
campaignRouter.post("/",campaignController.postCampaign);
campaignRouter.put("/specific",campaignController.editCampaign);
campaignRouter.delete("/specific",campaignController.deleteCampaign);
export default campaignRouter;