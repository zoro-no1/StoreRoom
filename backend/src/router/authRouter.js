import { Router } from "express";
import { check, login, logout, signin } from "../controllers/auth_Controllers.js";
import { isLogin } from "../middlewares/isLogin.js";

const router=Router()

router.post("/signin",signin)
router.post("/login",login)
router.post("/logout",isLogin,logout)
router.post("/check",isLogin,check)
export default router