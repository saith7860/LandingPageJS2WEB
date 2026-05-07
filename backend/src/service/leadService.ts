import { ApiError } from "../middlewares/errorHandler.js";
import * as leadRepo from '../repo/leadRepo.js';
import { LeadType } from "../types/leadType.js";
const createUser = async (data:LeadType) => {
  const {email } = data;
 console.log(data);
 
  const checkEmailExists = await leadRepo.isEmailExists(email);
  if (checkEmailExists) {
    throw new ApiError(409, "Email alrady exists");
  } else {
    
    const newUser = await leadRepo.create(data);
    if (!newUser) {
      throw new ApiError(500, "Interval Server Error!User not created");
    }
    return newUser;
  }
};
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
export { createUser };
