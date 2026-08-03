import { Prisma } from "../config/prisma";

export const User = {

    signupS : async (username,hashPswd)=>{
        const result = await Prisma.User.create({
            data: {
                username: username,
                password: hashPswd
            }
        })
        return result;
    },
    existS :async (username)=>{                 
        const result = Prisma.User.findUnique({
            where: {
                username
            }
        })
        return result;
    }

}
