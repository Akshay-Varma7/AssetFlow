export { authMW } from "./authMW";
export { errorMW } from "./errorMW";
export { accessMW } from "./roleAccessMW";
//for syncronous mw we can use return res.json//any error here by express
//for  async mw we use asyncwrapper and throw new error 