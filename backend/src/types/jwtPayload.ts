import { Role } from "../types";

export interface JwtPayload {//actually jsonwebtoken has this type same name can extend
    //but here not an error as we havent imported it 
    username: String,
    roles: Role[]
}
//hence we could've done -import jwt,{JwtPayload} from "jsonwebtoken"; & extend JwtPayload to custom
//no one except mw and controller can change req