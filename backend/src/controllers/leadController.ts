import { Request,Response,NextFunction } from "express"
import * as leadService from "../service/leadService.js"
export const createLead=async(req:Request,res:Response,next:NextFunction)=>{
try {
   await leadService.createUser(req.body);
    return res.json({
      success: "true",
      message:"User created successfully"
    });
   
       
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

