import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    require: true,
  },
  product_img1: {
    type: String,
    require: true,
  },
  product_img2: {
    type: String,
    require: true,
  },
  product_img3: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  product_des: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  pincode: {
    type: String,
    require: true,
  },
  catogery: {
    type: String,
    require: true,
  },
});

const Products = new mongoose.model("product", productSchema);
export default Products;
