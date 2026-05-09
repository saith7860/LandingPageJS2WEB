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
   const slug=req.query.slug as string;
   const campaign=await campaignService.fetchSpecificCampaign(slug);
   return  res.json({
       success:true,
       data:campaign
    })
} catch (error) {
    next(error)
}
}
const editCampaign=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const slug  =req.query.slug as string;
    const updatedCampaign=await campaignService.editCampaign(slug,req.body);
    return res.json({
        success:true,
        message:"Campaign updated successfully",
        data:updatedCampaign
    })
} catch (error) {
    next(error);
}
}
const deleteCampaign=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const slug=req.query.slug as string;
    const deleteCampaign=await campaignService.deleteCampaign(slug);
    return res.json({
        success:true,
        message:"Campaign updated successfully",
        data:deleteCampaign
    })
} catch (error) {
    next(error);
}
}
export {getAllCampaigns,getSpecificCampaign,postCampaign,editCampaign,deleteCampaign}