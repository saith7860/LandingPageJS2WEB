import { Request,Response,NextFunction } from "express"
import mongoose, { Types } from "mongoose";
import * as campaignService from '../service/campaignService.js';

const getAllCampaigns=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const campaigns=await campaignService.fetchCampaigns();
       return res.json({
            success:"true",
            data:campaigns
        });
    } catch (error) {
        next(error)
    }
}
const postCampaign=async(req:Request,res:Response,next:NextFunction)=>{
try {
   await campaignService.createCampaign(req.body);
   return res.json({
        success:"True",
        message:"Category saved successfully"
    });
} catch (error) {
    next(error);
}
}
const getSpecificCampaign=async(req:Request,res:Response,next:NextFunction)=>{
try {
   
   return  res.json({
       success:true,
    })
} catch (error) {
    next(error)
}
}
const editCampaign=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
}
}
const deleteCampaign=(req:Request,res:Response)=>{
try {
    
} catch (error) {
    
}
}
export {getAllCampaigns,getSpecificCampaign,postCampaign,editCampaign,deleteCampaign}