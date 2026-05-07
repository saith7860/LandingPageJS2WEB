import Campaign from "../models/campaignModel.js";
import type { CampaignType } from "../types/campaignType.js";
const showAllCampaings=async()=>{
    return await Campaign.find({});
   
} 
const createCampaign=async(data:CampaignType)=>{
  const newCategory=new Campaign(data);
  await newCategory.save();
  return newCategory;
}


export {showAllCampaings,createCampaign}