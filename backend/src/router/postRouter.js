import { Router } from "express";
import { isLogin } from "../middlewares/isLogin.js";
import { allContent, createPost, postDelete } from "../controllers/post_Controllers.js";

const router=Router()

router.post("/createPost",isLogin,createPost)
router.get("/deletePost/:id",isLogin,postDelete)
router.post("/contents",isLogin,allContent)
export default router