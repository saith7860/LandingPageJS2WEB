import express from 'express'
const campaignRouter=express.Router();
import * as campaignController from '../controllers/campaignController';
campaignRouter.get("/",campaignController.getAllCampaigns);
campaignRouter.get("/:id",campaignController.getSpecificCampaign);
campaignRouter.post("/",campaignController.postCampaign);
campaignRouter.put("/:id",campaignController.editCampaign);
campaignRouter.delete("/:id",campaignController.deleteCampaign);