import {
  SingUpHandler,
  loginHandler,
  updateProfile,
} from "../controller/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/singup").post(SingUpHandler);
router.route("/login").post(loginHandler);
router.route("/update/:id").put(updateProfile);
export default router;
