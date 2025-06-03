import { Router } from "express";
import { isLogin } from "../middlewares/isLogin.js";
const router=Router();

router.post("/create",isLogin);
router.get("/:id",isLogin)


export default router