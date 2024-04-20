import { SingUpHandler } from "../controller/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/singup").post(SingUpHandler);

export default router;
