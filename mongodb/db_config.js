const mongoose = require("mongoose");


module.exports = () => {
  mongoose
    .connect(process.env.DB_PATH, {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb is connected.......");
    });

  mongoose.connection.on("connected", () => {
    console.log("MongoDb is connected.........");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err.message);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDb is disconnected.......");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("MongoDb is disconnected.......");
      process.exit(0);
    });
  });
};
