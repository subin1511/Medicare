const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Patient Schema
const IotSchema = new Schema({
  temperature: {
    type: String,
   
  },
});

const Iot = mongoose.model("Iot", IotSchema);

module.exports = Iot;
