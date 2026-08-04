import express from "express";
import { getPersonC , updatePersonC } from "../controllers";
import { authMW , accessMW } from "../middlewares";

const router = express.Router();

router.use(authMW);

router.get("/",accessMW('Admin','Asset_Manager'),getPersonC);//for ASSET_MANAGER to allocate or transfer

router.use(accessMW('Admin'));

router.put("/",updatePersonC);

export default router;