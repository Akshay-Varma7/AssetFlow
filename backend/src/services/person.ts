import { Prisma } from "../config/prisma";
import { User } from "../generated/prisma/client";

export const Person = {
    getPersonS : async () : Promise<User[]> =>{//empty [] acceptable
        const result = await  Prisma.User.findMany({// or findMany()
        })
        return result;
    },
    updatePersonS : async (personId,newRole) : Promise<User | null> =>{//tc: he has same role as new-client api
            const result = await  Prisma.User.update({
                where: {
                    id: personId
                },
                data: {
                    roles: {
                        push: newRole//a string->from that enum
                    }
                },
            })
        return result;
    },
}
