const bcrypt = require('bcrypt')
const _ = require('lodash')
const Joi = require('joi')
const express = require('express')
const User = require('../model/User')

const router = express.Router()

function validateUser(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  })
  return Joi.attempt(req, schema)
}

router.post('/', async (req, res) => {
  try {
    validateUser(req.body)

    const user = await User.findOne({ email: req.body.email })
    if (!user)
      return res.status(400).json({ message: 'Invalid email or password' })
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword)
      return res.status(400).json({ message: 'Invalid email or password' })

    const token = user.generateToken()
    res
      .status(200)
      .header('x-auth-token', token)
      .json(_.pick(user, ['_id', 'name', 'email']))
  } catch (error) {
    res.status(400).json({ message: error })
  }
})

module.exports = router
