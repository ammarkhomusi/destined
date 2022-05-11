const express = require("express");
const Destinations = require("../controllers/destinations.js");
const User = require("../controllers/user");

const router = express.Router();

router.get("/destinations", controller.getAllDestinations);

router.post("/register", User.createUser);
router.post("/login", User.loginUser);
router.post("/logout", User.logoutUser);

module.exports = router;
