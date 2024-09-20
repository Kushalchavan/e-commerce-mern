import { v2 as coudinary } from "cloudinary";

const connectCloudinary = async () => {
  coudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
  });
};

export default connectCloudinary;
