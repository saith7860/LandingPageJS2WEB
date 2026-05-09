import { ApiError } from "../middlewares/errorHandler.js";
import * as leadRepo from '../repo/leadRepo.js';
import * as campaignRepo from '../repo/campaignRepo.js';
import { LeadType } from "../types/leadType.js";
const createUser = async (data:LeadType) => {
  const {slug}=data;
  const findCampaign=await campaignRepo.showSpecificCampaign(slug);
  if (!findCampaign) {
    throw new ApiError(404,'Campaign not found');
  } 
    const newUser = await leadRepo.create(data,findCampaign._id);
    if (!newUser) {
      throw new ApiError(500, "Interval erver Error!User not created");
    }
    return newUser;
  }
const fetchAllLeads=async()=>{
  const leads=await leadRepo.getAllLeads();
  if (!leads) {
    throw new ApiError(404,'No leads found');
  }
  return leads;
}
// const loginUser = async (data: loginUserType) => {
//     const {email,password}=data;
//     const findUser=await userRepo.isEmailExists(email);
//  if (!findUser || !findUser.password ||!findUser.email) {
//   throw new ApiError(401,"Invalid credentials");
// }
//   const isMatch= await bcrypt.compare(password,findUser.password);
//   if (isMatch) {
//     //created payload
//     const payload={
//       email:findUser.email,
//       password:findUser.password,
//       role:findUser.role
//     }
//     //generate token
//     const token= createToken(payload)
//     if (token) {
//       return token;
//     }
//     throw new ApiError(500,'Error in generating token');
//   }
//   throw new ApiError(401,'Password does not match')
// };
export { createUser,fetchAllLeads };
