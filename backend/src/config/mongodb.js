import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected successfully");
    });
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Error during connecting with mongogb: ", error);
    throw error;
  }
};

export default connectDB;
