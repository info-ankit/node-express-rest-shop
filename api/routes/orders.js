const Express = require('express');
const router = Express.Router();
const Mongoose = require('mongoose');

const Order = require('../model/order');
const Product = require('../model/product');

router.get('/', (req, res, next) => {
  Order.find()
    .exec()
    .then(response => {
      res.status(200).json({
        "message": "Handling GET request for /orders route.",
        "result": response
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error on handling GET request for /orders route.",
        "result": err
      });
    });
});

router.post('/', (req, res, next) => {
  Product.findById(req.body.productId)
    .then(response => {
      if (!response) {
        return res.status(404).json({
          message: "Product not found."
        });
      }
      let order = new Order({
        _id: new Mongoose.Types.ObjectId(),
        productId: req.body.productId,
        quentity: req.body.quentity,
        sallerId: req.body.sallerId,
        orderPrice: req.body.orderPrice,
        status: req.body.status,
        orderDate: req.body.orderDate
      });
      return order.save();
    })
    .then(response => {
      return res.status(200).json({
        "message": "Handling POST request for /orders route.",
        "result": {
          _id: response._id,
          productId: response.productId,
          orderPrice: response.orderPrice,
          quentity: response.quentity,
          status: response.status,
          orderDate: response.orderDate,
          sallerId: response.sallerId,
          request: {
            type: "GET",
            url: "http://localhost:" + process.env.PORT + "/api/orders/" + response._id
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error handling on POST request for /orders route.",
        "result": err
      });
    });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Order.findById(id)
    .select("_id quentity orderPrice status orderDate")
    .populate("productId", "name description")
    .exec()
    .then(response => {
      res.status(200).json({
        "message": "You discovered the /orders with ID in GET method.",
        "result": {
          _id: response._id,
          product: response.productId,
          quentity: response.quentity,
          orderPrice: response.orderPrice,
          status: response.status,
          orderDate: response.orderDate,
          request: {
            type: "GET",
            url: "http://localhost:" + process.env.PORT + "/api/orders"
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error on discovered the /orders with ID in GET method.",
        "id": id,
        "result": err
      });
    });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Order.deleteOne({_id: id})
    .exec()
    .then(response => {
      res.status(200).json({
        "message": "Handling DELETE request for /orders route.",
        "id": id,
        "result": response
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error on handling DELETE request for /orders route.",
        "id": id,
        "result": err
      });
    });
});

module.exports = router;