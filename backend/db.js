const mongoose = require("mongoose");
require("dotenv").config();

// Use MONGODB_URI from environment variables, with a fallback
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not defined in .env file");
    process.exit(1);
}

const connectDB = async () => {
    try {
        console.log("⏳ Connecting to MongoDB...");
        await mongoose.connect(MONGODB_URI);
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
    }
};

connectDB();

module.exports = mongoose.connection;