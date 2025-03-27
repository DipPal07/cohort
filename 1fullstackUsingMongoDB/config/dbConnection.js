import mongoose from "mongoose";
const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connect successfully");
    })
    .catch((e) => {
      console.log("Database not connected issue is : ", e);
    });
};
export default dbConnection;
