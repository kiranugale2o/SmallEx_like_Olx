import express from "express";
import dbconnection from "./src/Config/dbconnection.js";
import userRoute from "./src/routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();
dbconnection();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoute);
app.listen(4000, (err) => {
  console.log("server is running o n 4000 ort ");
});
