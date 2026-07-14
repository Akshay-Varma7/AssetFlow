import express from "express";
import dotenv from "dotenv";
dotenv.config();

//import local
import { main } from "./db.js";
import { errorMW } from "./middlewares";

//types

const app = express();//that obj is const but prop can change

//defining variables
const port:number = process.env.port;
const PG_URL:string = process.env.PG_URL;

main();

app.use(errorMW);

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})
