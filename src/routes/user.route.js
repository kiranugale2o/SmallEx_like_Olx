import { SingUpHandler, loginHandler } from "../controller/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/singup").post(SingUpHandler);
router.route("/login").post(loginHandler);
export default router;
