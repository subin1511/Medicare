const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://0.0.0.0:27017/");

const db = mongoose.connection;

db.on("error", () => {
  console.log("Failed to connect to MongoDB");
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
