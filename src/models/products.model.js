import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  ownerId:{
    type:new mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  name: {
    type: String,
    require: true,
  },
  product_img: {
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
  catogery: {
    type: String,
    require: true,
  },
});

const Products = new mongoose.model("product", productSchema);
export default Products;
