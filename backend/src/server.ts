import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();//or import dotenv/config ->avaiable globally in project from this folder to access

//import local-js is a superset of ts
// import { main } from "./helper/db.js";
import { errorMW } from "./middlewares/index.ts";

//router
import { deptRouter , categoryRouter , personRouter } from "./routes/index.ts";
//types

const app = express();//that obj is const but prop can change

//defining variables
const port:number = process.env.port;

// const DATABASE_URL:string = process.env.DATABASE_URL;-NO NEED
// main();-no need auto when 1 query runs->if want manual connect and disconect maybe?

//mw
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/department",deptRouter);

app.use("/category",categoryRouter);

app.use("/person",personRouter);


app.use(errorMW);

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})
