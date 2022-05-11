const Destinations = require("../models/destinations.js");

exports.getAllDestinations = async (req, res) => {
  console.log("inside controller");
  try {
    const result = await Destinations.find();
    console.log(result);
    res.status(200);
    res.send(result);
  } catch (error) {
    console.log("error", error);
    res.sendStatus(500);
  }
};
