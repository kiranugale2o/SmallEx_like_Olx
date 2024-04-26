import Joi from "joi";

const productValidation = Joi.object({
  ownerId: Joi.string().required(),
  name: Joi.string().required(),
  product_img1: Joi.string(),
  product_img2: Joi.string(),
  product_img3: Joi.string(),
  price: Joi.string().required(),
  product_des: Joi.string()
    .required()
    .min(10)
    .message("write project description in 10 characters"),
  location: Joi.string().required().min(3),
  pincode: Joi.string().required().min(6).max(6).message("Invalid Pincode "),
  catogery: Joi.string().required(),
});

export default productValidation;
