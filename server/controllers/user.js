const bcrypt = require("bcrypt");
const User = require("./../models/user");

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(409)
      .send({ error: "409", message: "User already exists" });
  }
  try {
    if (password === "") {
      throw new Error();
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await User.create(newUser);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: "Could not create user" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    res.status(200).send(user);
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie();
  });
};
