import mongoose from "mongoose";
import Products from "../models/products.model.js";
import productValidation from "../validation/productValidation.js";

//create product handler
export const createProduct = async (req, res) => {
  try {
    await productValidation.validateAsync(req.body);
    const product = await Products(req.body);
    await product.save();
    if (product) {
      return res
        .status(200)
        .json({ status: true, message: "Product Send SuccessFully " });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

//get All product for selling
export const allProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    if (products.length !== 0) {
      return res.status(200).json(products);
    } else {
      return res
        .status(200)
        .json({ status: false, message: "No Selling Any products" });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

//get single product

export const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (product) {
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

//remove the product

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndDelete(id);
    if (product) {
      return res
        .status(200)
        .json({ message: "Product Remove SuccessFully ! " });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};
