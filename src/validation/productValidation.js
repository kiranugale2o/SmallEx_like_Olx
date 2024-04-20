import Joi from "joi";

const productValidation = Joi.object({
  ownerId: Joi.string().required(),
  name: Joi.string().required(),
  product_img: Joi.string().required(),
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
