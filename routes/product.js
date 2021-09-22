const express = require("express");
const responseBeautifier = require("../middleware/responseBeautifier");
const router = express.Router();
const ProductService = require("../service/ProductService");

router.get(
  "/",
  (req, res, next) => {
    ProductService.findAll()
      .then((result) => {
        req.body = result;
      })
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.post(
  "/",
  (req, res, next) => {
    ProductService.create({
      name: req.body.name,
      description: req.body.description,
    })
      .then((result) => {
        req.body = result;
      })
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.patch(
  "/:id",
  (req, res, next) => {
    ProductService.update({id: req.params.id,...req.body})
      .then((result) => {})
      .catch((err) => {
        req.body = err;
        req.responseStatus = 500;
      })
      .finally(() => next());
  },
  responseBeautifier
);

router.delete(
  "/:id",
  (req, res, next) => {
    ProductService.softDelete(req.params.id)
      .then((result) => {
        req.body = result
      }).catch((err) => {
        console.log('err called', err);
        req.body = err
        req.responseStatus = 500
      }).finally(() => next());
  },
  responseBeautifier
)

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

module.exports = router;
