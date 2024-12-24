const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // bufferCommands: false, // Disable buffering
      connectTimeoutMS: 30000, // Set connection timeout to 30 seconds
    });
    console.log("connectDB : connection success :", connection.connection.host);
  } catch (err) {
    console.log("connectDB : connection error :", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
