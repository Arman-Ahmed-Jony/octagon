const bcrypt = require('bcrypt')
const express = require('express')
const _ = require('lodash')
const { User, validate } = require('../model/User')

const router = express.Router()

/**
 * register a user
 */
router.post('/register', async (req, res) => {
  try {
    validate(req.body)

    let user = await User.findOne({ email: req.body.email })
    if (user)
      return res.status(400).json({ message: 'User already registered' })

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

    const salt = await bcrypt.genSalt() // by default salt is 10
    user.password = await bcrypt.hash(user.password, salt)

    const newUser = await user.save()
    const token = user.generateToken()
    res
      .status(201)
      .header('x-auth-token', token)
      .json(_.pick(newUser, ['_id', 'name', 'email']))
  } catch (error) {
    res.status(400).json({ message: error })
  }
})

module.exports = router
