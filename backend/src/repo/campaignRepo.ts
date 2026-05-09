import Campaign from "../models/campaignModel.js";
import type { CampaignType } from "../types/campaignType.js";
const showAllCampaings=async()=>{
    return await Campaign.find({});
   
} 
const showSpecificCampaign=async(id:string)=>{
    return await Campaign.findOne({slug:id});
}
const createCampaign=async(data:CampaignType)=>{
  const newCategory=new Campaign(data);
  await newCategory.save();
  return newCategory;
}
const updateCampaign=async(slug:string,data:CampaignType)=>{
  const updatedCampaign=await Campaign.findOneAndUpdate({slug},data,{new:true});
  return updatedCampaign;
}
const deleteCampaign=async(slug:string)=>{
  const deletedCampaign=await Campaign.findOneAndDelete({slug});
  return deletedCampaign;
}

export {showAllCampaings,createCampaign,showSpecificCampaign,updateCampaign,deleteCampaign}