import Lead from "../models/leadModel.js";
import { LeadType } from "../types/leadType.js";
import mongoose from "mongoose";
export const create=async(data:LeadType,campaignId:mongoose.Types.ObjectId)=>{
  const newUser=new Lead({...data,campaign:new mongoose.Types.ObjectId(campaignId)});
  await newUser.save();
  const user=newUser.populate("campaign", "title resourceUrl");
  return user;
}
export const isEmailExists=async(email:string)=>{
  const findUser=await Lead.findOne({email});
  return findUser;
}
export const getAllLeads=async()=>{
  const leads=await Lead.find({}).populate("campaign", "title resourceUrl");
  return leads;
} 
export const findByToken=async(token:string)=>{
  const user=await Lead.findOne({verificationToken:token}).populate("campaign");
  return user;
}
