export interface JwtPayload {//actually jsonwebtoken has this type same name can extend
    //but here not an error as we havent imported it 
    username: String,
}
//hence we could've done -import jwt,{JwtPayload} from "jsonwebtoken";