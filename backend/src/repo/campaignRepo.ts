import Campaign from "../models/campaignModel";
import type { CampaignType } from "../types/campaignType";
const showAllCampaings=async()=>{
    return await Campaign.find({});
   
} 
const createCampaign=async(data:CampaignType)=>{
  const newCategory=new Campaign(data);
  await newCategory.save();
  return newCategory;
}


export {showAllCampaings,createCampaign}