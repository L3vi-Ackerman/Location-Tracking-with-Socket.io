require('dotenv').config();
const mongoose = require('mongoose');
const db_url = process.env.DB_URL
const connectDB = async () => {
    try {
      await mongoose.connect(db_url);
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

module.exports = connectDB;