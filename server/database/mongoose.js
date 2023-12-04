const mongoose = require('mongoose');
const env = require('./env');
const connectDB = async () => {
  try {
    await mongoose.connect(env.mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB
