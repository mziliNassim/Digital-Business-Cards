const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("connectDB : connection success :", connection.connection.host);
  } catch (err) {
    console.log("connectDB : connection error :", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
