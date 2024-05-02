const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://aliaslahep:aliaslahep1234@cluster0.69b9rr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


const db = mongoose.connection;

db.on("error", () => {
  console.log("Failed to connect to MongoDB");
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
