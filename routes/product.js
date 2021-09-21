const express = require('express')

const router = express.Router()
// const db = require('../database/mysql')
const ProductService = require('../service/ProductService')
router.get('/', (req,res) => {
  ProductService.findAll().then((result) => {
    res.json(result)
  }).catch((err) => {
    res.status(500).json(err)
  });
})
router.post('/', (req,res) => {
  ProductService.create({
    name: req.body.name,
    description: req.body.description
  }).then((result) => {
    res.json(result)
  }).catch((err) => {
    res.status(500).json(err)
  });
})
router.patch('/', (req, res) => {
  ProductService.update(req.body).then((result) => {
    res.json(result)
  }).catch((err) => {
    res.status(500).json(err)
  });
})

// router.get('/', (req, res) => {
//   db.models.product
//     .findAll({
//       limit: 2
//     })
//     .then((products) => {
//       res.json(products)
//     })
//     .catch((err) => res.status(500).json(err))
// })

// router.get('/:id', (req, res) => {
//   db.models.product
//     .findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: ['name', 'description', 'createdAt']
//     })
//     .then((response) => res.json(response))
//     .catch((err) => res.status(500).json(err))
// })

// router.post('/', (req, res) => {
//   db.models.product
//     .create({
//       name: req.body.name,
//       description: req.body.description
//     })
//     .then((product) => {
//       res.json(product)
//     })
//     .catch((err) => {
//       res.status(500).json(err)
//     })
// })

// router.delete('/:id', (req, res) => {
//   db.models.product
//     .destroy({
//       where: { id: req.params.id }
//     })
//     .then((response) => res.json(response))
//     .catch((err) => res.status(500).json(err))
// })

// router.patch('/:id', (req, res) => {
//   db.models.product
//     .update(
//       {
//         name: req.body.name,
//         description: req.body.description
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     )
//     .then((response) => res.json(response))
//     .catch((err) => res.status(500).json(err))
// })

module.exports = router
