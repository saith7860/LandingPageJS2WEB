import * as campaignRepo from '../repo/campaignRepo.js';
import { ApiError } from '../middlewares/errorHandler.js';
import type { CampaignType } from '../types/campaignType.js';
import sl from 'zod/v4/locales/sl.js';
const fetchCampaigns=async()=>{
   const campaigns=await campaignRepo.showAllCampaings();
   if (!campaigns) {
    throw new ApiError(404,'Campaign not found');
   }
   return campaigns;
}
const fetchSpecificCampaign=async(id:string)=>{
  const campaign=await campaignRepo.showSpecificCampaign(id);
  if (!campaign) {
    throw new ApiError(404,'Campaign not found');
  }
  return campaign;
}
const createCampaign=async(data:CampaignType)=>{
  const {slug}=data;
  const findCampaign=await campaignRepo.showSpecificCampaign(slug);
  if (findCampaign) {
    throw new ApiError(404,'Campaign already exists');
  }
  const result= await campaignRepo.createCampaign(data);
  if (!result) {
    throw new ApiError(400,'Campaign not created')
  }
  return result;
}
const deleteCampaign=async(id:string)=>{
  const campaign=await campaignRepo.deleteCampaign(id);
  if (!campaign) {
    throw new ApiError(404,'Campaign not found');
  }
  return campaign;
}
const editCampaign=async(id:string,data:CampaignType)=>{
  const campaign=await campaignRepo.updateCampaign(id,data);
  if (!campaign) {
    throw new ApiError(404,'Campaign not found');
  }
  return campaign;
}
// const getSpecificCategory=async(category:string)=>{

//     const specificData=await categoryRepo.getSpecificCategory(category);
//       if (!specificData) {
//        throw new ApiError(404,'Category does not found')
//     }
//     if (specificData.items.length==0) {
//        throw new ApiError(404,'No items found for this cateogry')
//     }
 
    
//     return specificData;
// }
export {fetchCampaigns,fetchSpecificCampaign,createCampaign,deleteCampaign,editCampaign}