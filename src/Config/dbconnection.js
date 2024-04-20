import mongoose from "mongoose";

const dbconnection = async () => {
  mongoose
    .connect(process.env.Mongo_DB)
    .then(() => {
      console.log("connection successful ");
    })
    .catch(() => {
      console.log("filed !!!!!!!");
    });
};

export default dbconnection;
