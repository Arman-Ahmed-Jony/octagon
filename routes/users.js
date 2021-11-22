const bcrypt = require("bcrypt");
const express = require("express");
const _ = require("lodash");
const UserService = require("../service/UserService");
const authenticationUtil = require("../util/authenticaitonUtil");
const responseBeautifier = require("../middleware/responseBeautifier");

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

    const newUser = await UserService.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    const token = authenticationUtil.generateJwtToken(newUser, "blah");
    res
      .status(201)
      .header("x-auth-token", token)
      .json(_.pick(newUser, ["firstName", "lastName", "email"]));
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post(
  "/login",
  async (req, res) => {
    try {
      const user = await UserService.findByEmail(req.body.email);
      console.log("test", user);
      if (!user) {
        res.status(401).json({ message: "Invalid email or password" });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(401).json({ message: "Invalid email or password" });
      }
      const token = authenticationUtil.generateJwtToken(user, "blah");
      res
        .status(200)
        .header("x-auth-token", token)
        .json(_.pick(user, ["firstName", "lastName", "email"]));
    } catch (error) {
      req.body = error;
      req.responseStatus = 500;
    } finally {
      next();
    }
  },
  responseBeautifier
);
module.exports = router;
