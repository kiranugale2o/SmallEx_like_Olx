import mongoose from "mongoose";
import Products from "../models/products.model.js";
import productValidation from "../validation/productValidation.js";
import createRedisClient from "../redis/client.js";
import { promisify } from "util";
import redis from "redis";

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
  let client = await createRedisClient();
  try {
    const data = client.get("Product", (err, reply) => {
      if (err) {
        console.error("Redis SET Error:", err);
      } else {
        console.log("Data stored in Redis:", reply);
      }
    });
    if (Object.keys(data).length !== 0) {
      return res.status(200).json({ data: data });
    } else {
      const products = await Products.find({}).populate("ownerId");
      if (products.length !== 0) {
        await client.set("Product", JSON.stringify(products), (err, reply) => {
          if (err) {
            console.error("Redis SET Error:", err);
          } else {
            console.log("Data stored in Redis:", reply);
          }
        });

        return res.status(200).json(products);
      } else {
        return res
          .status(200)
          .json({ status: false, message: "No Selling Any products" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  } finally {
    client.quit();
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

//get your selling products
export const yourProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Products.find({ ownerId: id });
    if (products.length !== 0) {
      return res.status(200).json({ status: true, products: products });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "Sell A Products On SmallEx " });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Products.findByIdAndUpdate(id, req.body);
    if (update) {
      return res.status(200).json({ message: "update successfully " });
    } else {
      return res.status(400).json({ message: "something wrong ! " });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};
