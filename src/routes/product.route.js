import { Router } from "express";
import {
  allProducts,
  createProduct,
  deleteProduct,
  singleProduct,
  updateProduct,
  yourProducts,
} from "../controller/product.controller.js";

const router = Router();

router.route("/create").post(createProduct);
router.route("/allproducts").get(allProducts);
router.route("/singleproduct/:id").get(singleProduct);
router.route("/deleteproduct/:id").delete(deleteProduct);
router.route("/yourproducts/:id").get(yourProducts);
router.route("/update/:id").put(updateProduct);
export default router;
