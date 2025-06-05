import { Router } from "express";
import { isLogin } from "../middlewares/isLogin.js";
import { createLink, deleteLink, showLink } from "../controllers/linkControllers.js";
const router=Router();

router.post("/create",isLogin,createLink);
router.get("/link/:id",isLogin,showLink);
router.post("/delete",isLogin,deleteLink)


export default router