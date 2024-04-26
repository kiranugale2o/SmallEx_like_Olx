import express from "express";
import cors from "cors";
import dbconnection from "./src/Config/dbconnection.js";
import userRoute from "./src/routes/user.route.js";
import productRoute from "./src/routes/product.route.js";
import dotenv from "dotenv";
dotenv.config();
dbconnection();
let originAllow = {
  origin: "*",
  methods: "PUT,GET,POST,DELETE,PATCH,HEAD",
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(originAllow));
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoute);
app.use("/product", productRoute);
app.listen(process.env.PORT || 4000, (err) => {
  console.log("server is running on Port  ", process.env.PORT);
});
