import Joi from "joi";

const userValidation = Joi.object({
  name: Joi.string().required(),
  profileImg: Joi.string().default(""),
  email: Joi.string().email().required(),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be a valid 10-digit number",
      "any.required": "Phone number is required",
    }),
  pincode: Joi.string().required().min(6).max(6).message("Invalid Pincode "),
  password: Joi.string().required(),
  tokens: Joi.array(),
});

export default userValidation;
