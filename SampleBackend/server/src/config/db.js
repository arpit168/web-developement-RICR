import mongoose, { connect } from "mongoose";

const ConnectDB = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URI);
    console.log("MO=ongo DB Connected at", result.connection.host);
  } catch (error) {
    console.log("MongoDB Connection error");
    console.log(error);
    process.exit(1);
  }
};

export default ConnectDB;