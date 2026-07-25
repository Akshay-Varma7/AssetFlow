import { Prisma } from "../config/prisma";

export const User = {

    signupS : async (username,hashPswd)=>{
        await result = await Prisma.User.create({
            data: {
                username: username,
                password: hashPswd
            }
        })
    return result;
    },
    existS :async (username)=>{
        await result = Prisma.User.findUnique({
            where: {
                username
            }
        })
        return result;
    }

}
