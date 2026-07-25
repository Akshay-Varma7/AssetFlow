//use try catch here only if want custom errors and this wld bubble up-?
import jwt from "jsonwebtoken";//sign,verify,decode
import b from "bcrypt";
import { asyncHandler } from "../helper/asyncHandler";
import { User } from "../services";
import { JwtPayload } from "../types";

//signup username email and pswd but for 

export const signup = asyncHandler(async (req,res)=>{
    // TODO: zod validn + hash pswd ->with status codes
   const {username,password} = req.body;
   const hashPswd = await b.hash(password,5);

   const result = await User.signupS()

   res.status(200).json({
     message: "user signed up!",
     result
   })
})

export const signin = asyncHandler(async (req,res)=>{
    const {username,password} = req.body;
    //check in db
    const userExist = await  User.existS(username);//record or null

    if(userExist){
        const isMatch = await b.compare(password,userExist.password);
        if(isMatch){
            const payload : JwtPayload = {
                username : username,
                roles: userExist.roles,
                userId: userExist.id
            }
            const token = jwt.sign(payload,JWT_SECRET,{ expiresIn: "15m" });//access token+ more???

            res.cookie("token",token,{maxAge:15*60*1000});//in this case same as token span+ 3more??

            res.json({message:"login successful"});
        }else{
            res.json({message:"wrong password"});
        }
    }else{
        res.json({
            message: "user dne!"
        })
    }
})