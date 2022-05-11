const mongoose = require("./db");
const Schema = mongoose.Schema;

const destinedSchema = new Schema({
  destination: { type: String, required: true },
  country: { type: String, required: true },
  tags: { type: String, required: true },
  imgURL: { type: String, required: true },
});

const Spot = mongoose.model("Spot", destinedSchema);

module.exports = Spot;
