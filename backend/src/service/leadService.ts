import { ApiError } from "../middlewares/errorHandler.js";
import crypto from "crypto";
import * as leadRepo from '../repo/leadRepo.js';
import * as campaignRepo from '../repo/campaignRepo.js';
import { LeadType } from "../types/leadType.js";
import sendEmail from "../utils/Email.config.js";
const createUser = async (data:LeadType) => {
  const {slug}=data;
  const user=await leadRepo.isEmailExists(data.email);
  if (user) {
    throw new ApiError(400,'User already exists');
  } 
  const findCampaign=await campaignRepo.showSpecificCampaign(slug);
  if (!findCampaign) {
    throw new ApiError(404,'Campaign not found');
  } 
  const token = crypto.randomBytes(32).toString("hex");
  const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const newUser = await leadRepo.create({...data,verificationToken:token,verificationTokenExpires},findCampaign._id);
    if (!newUser) {
      throw new ApiError(500, "Interval erver Error!User not created");
    }
    // verification link
  const verificationLink =`${process.env.BACKEND_URL}/api/lead/verify-email/${token}`;


  // send email
  const emailResponse=await sendEmail({
    to: newUser.email,
    subject: "Get the resource you requested",
    html: `
      <h2>Get the resource you requested</h2>

      <p>
        Thanks for signing up. Click the button below to access your resource.
      </p>

      <a href="${verificationLink}">
        Access Resource
      </a>
    `
  });
   console.log(emailResponse);
   
  return newUser;
    
  }
const fetchAllLeads=async()=>{
  const leads=await leadRepo.getAllLeads();
  if (!leads) {
    throw new ApiError(404,'No leads found');
  }
  return leads;
}
const verifyUser=async(token:string)=>{
  const user=await leadRepo.findByToken(token);
  if (!user) {
    throw new ApiError(404,'User not found');
  }
  if(user.isVerified){
    throw new ApiError(400,'User already verified');
  }
  if (user.verificationTokenExpires && user.verificationTokenExpires <new Date()) {
    throw new ApiError(400,'Token expired');
  }
  user.isVerified=true;
  user.verificationToken=null;
  user.verificationTokenExpires=null;
  user.verifiedAt=new Date();
  await user.save();
  return {user,resourceUrl:(user.campaign as any)?.resourceUrl};
}

export { createUser,fetchAllLeads,verifyUser };
