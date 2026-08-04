import express from "express";
import { getCategoryC, createCategoryC, deleteCategoryC } from "../controllers";
import { authMW , accessMW } from "../middlewares";

const router = express.Router();

router.use(authMW);
router.use(accessMW('Admin'));

router.get("/",getCategoryC);

router.post("/",createCategoryC);

router.delete("/",deleteCategoryC);

export default router;