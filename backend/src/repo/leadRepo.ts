import Lead from "../models/leadModel.js";
import { LeadType } from "../types/leadType.js";

export const create=async(data:LeadType)=>{
  const newUser=new Lead(data);
  await newUser.save();
  return newUser;
}
export const isEmailExists=async(email:string)=>{
  const findUser=await Lead.findOne({email});
  return findUser;
}
export const getAllLeads=async()=>{
  const leads=await Lead.find({});
  return leads;
}
