import mongoose from "mongoose";
import Products from "../models/products.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Products(req.body);
    await product.save();
    if (product) {
      return res
        .status(200)
        .json({ status: true, message: "Product Send SuccessFully " });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ status: false, message: "Somethings else !" });
  }
};
