import { Router } from "express";
import { isLogin } from "../middlewares/isLogin.js";
import { createPost, postDelete } from "../controllers/post_Controllers.js";

const router=Router()

router.post("/createPost",isLogin,createPost)
router.get("/deletePost/:id",isLogin,postDelete)

export default router