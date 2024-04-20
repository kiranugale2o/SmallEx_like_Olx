import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controller/product.controller.js";

const router = Router();

router.route("/create").post(createProduct);
router.route("/getproducts").get(getProducts);
export default router;
