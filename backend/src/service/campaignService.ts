import * as campaignRepo from '../repo/campaignRepo';
import { ApiError } from '../middlewares/errorHandler';
import type { CampaignType } from '../types/campaignType';
const fetchCampaigns=async()=>{
   const campaigns=await campaignRepo.showAllCampaings();
   if (!campaigns.length) {
    throw new ApiError(404,'Menu not found');
   }
   return campaigns;
}

const createCampaign=async(data:CampaignType)=>{
  const result= await campaignRepo.createCampaign(data);
  if (!result) {
    throw new ApiError(400,'Campaign not created')
  }
  return result;
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
export {fetchCampaigns,createCampaign}