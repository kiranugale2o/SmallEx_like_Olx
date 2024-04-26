import Authentication from "../controller/Authentication.js";
import { createSubsciber } from "../controller/Subscriber.controller.js";
import {
  getNotification,
  sendNotification,
} from "../controller/notification.controller.js";
import {
  SingUpHandler,
  loginHandler,
  updateProfile,
} from "../controller/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/singup").post(SingUpHandler);
router.route("/login").post(loginHandler);
router.route("/auth").get(Authentication);
router.route("/subscriber/:id").post(createSubsciber);
router.route("/update/:id").put(updateProfile);
router.route("/notification/:id").get(getNotification);
router.route("/sendnotification").post(sendNotification);

export default router;
