import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
  // Used to set the basic Mongoose options
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
