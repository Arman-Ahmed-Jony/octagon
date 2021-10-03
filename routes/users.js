const bcrypt = require("bcrypt");
const express = require("express");
const _ = require("lodash");
const UserService = require("../service/UserService");
const authenticationUtil =  require('../util/authenticaitonUtil')

const router = express.Router();

/**
 * register a user
 */
router.post("/register", async (req, res) => {
  try {
    let user = await UserService.findByEmail(req.body.email);
    if (user)
      return res.status(400).json({ message: "User already registered" });

    const salt = await bcrypt.genSalt(); // by default salt is 10
    req.body.password = await bcrypt.hash(req.body.password, salt);

    const newUser = await UserService.create(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }
    )

    const token = authenticationUtil.generateJwtToken(newUser, "blah");
    res
      .status(201)
      .header("x-auth-token", token)
      .json(_.pick(newUser, ["id", "firstName", "email"]));
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
