import { Request,Response,NextFunction } from "express"
import * as leadService from "../service/leadService.js"
export const createLead=async(req:Request,res:Response,next:NextFunction)=>{
try {
   const newLead=await leadService.createUser(req.body);
    return res.json({
      success: "true",
      message:"User created successfully",
      data:newLead
    });
   
       
} catch (error) {
    next(error)
}
}
export const getAllLeads=async(req:Request,res:Response,next:NextFunction)=>{
try {
   const leads=await leadService.fetchAllLeads();
    return res.json({
      success: "true",
      message:"User fetched successfully",
      data:leads
    });
} catch (error) {
    next(error)
}
}
export const verifyLead=async(req:Request,res:Response,next:NextFunction)=>{
try {
   const token=req.params.token as string;
   const result=await leadService.verifyUser(token);
  return res.redirect(
      result.resourceUrl
   );
} catch (error) {
    next(error)
}
}
// export const loginUser=async(req:Request,res:Response,next:NextFunction)=>{
// try {
//      const loginUserToken=await userService.loginUser(req.body);
//     return res.json({
//       success: "true",
//       message:"User logged in successfully",
//       token:loginUserToken
//     });
// } catch (error) {
//     next(error)
// }
// }

