import express from "express";
import { getDeptC, createDeptC, renameDeptC, deleteDeptC } from "../controllers";
import { authMW , accessMW } from "../middlewares";

const router = express.Router();

router.use(authMW);
router.use(accessMW('Admin'));

router.get("/",getDeptC);

router.post("/",createDeptC);

router.put("/",renameDeptC);

router.delete("/",deleteDeptC);

export default router;