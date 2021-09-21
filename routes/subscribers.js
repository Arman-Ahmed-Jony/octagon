const express = require('express')

const router = express.Router()
const cors = require('../middleware/cors')
const authorization = require('../middleware/auth')

router.use(cors)

// async function getSubscriber(req, res, next) {
//   let subscriber
//   try {
//     subscriber = await Subscriber.findById(req.params.id)
//     if (subscriber === null) {
//       return res.status(404).json({ message: 'subscriber not found' })
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error })
//   }
//   res.subscriber = subscriber
//   next()
// }

// function auth(req, res, next) {
//   console.log('auth called')
//   next()
// }
// //  getting all subscribers
// router.get('/', authorization, async (req, res) => {
//   try {
//     const subscribers = await Subscriber.find()
//     res.json(subscribers)
//   } catch (error) {
//     res.status(500).json({ message: error })
//   }
// })
// //  getting one subscriber
// router.get('/:id', auth, getSubscriber, (req, res) => {
//   res.json(res.subscriber)
// })
// //  creating one subscriber
// router.post('/', async (req, res) => {
//   const subscriber = new Subscriber({
//     name: req.body.name,
//     subscribedChannel: req.body.subscribedChannel
//   })
//   try {
//     const newSubscriber = await subscriber.save()
//     res.status(201).json(newSubscriber)
//   } catch (error) {
//     res.status(400).json({ message: error })
//   }
// })
// //  updating one subscriber
// router.patch('/:id', getSubscriber, async (req, res) => {
//   if (req.body.name !== null) res.subscriber.name = req.body.name
//   if (req.body.subscribedChannel !== null) {
//     res.subscriber.subscribedChannel = req.body.subscribedChannel
//   }
//   try {
//     const updatedSubscriber = await res.subscriber.save()
//     res.json(updatedSubscriber)
//   } catch (error) {
//     res.status(400).json({ message: error })
//   }
// })
// //  deleting one subscriber
// router.delete('/:id', getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove()
//     res.json({ message: 'deleted the subscriber' })
//   } catch (error) {
//     res.status(500).json({ message: error })
//   }
// })

module.exports = router
