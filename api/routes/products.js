const Express = require('express');
const router = Express.Router();
const Mongoose = require('mongoose');

const Product = require('../model/product');

router.get('/', (req, res, next) => {
  Product.find()
    .select("_id name description price offer status")
    .exec()
    .then(response => {
      res.status(200).json({
        "message": "Handling GET request for /products route.",
        "result": response.map(re => {
          return {
            _id: re._id,
            name: re.name,
            description: re.description,
            price: re.price,
            offer: re.offer,
            status: re.status,
            request: {
              type: "GET",
              url: "http://localhost:" + process.env.PORT + "/api/products/" + re._id
            }
          }
        })
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error handling on GET request for /products route.",
        "result": err
      });
    });
});

router.post('/', (req, res, next) => {
  let product = new Product({
    _id: new Mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    offer: req.body.offer,
    status: req.body.status,
  });
  product.save()
    .then(response => {
      res.status(200).json({
        "message": "Handling POST request for /products route.",
        "result": {
          _id: response._id,
          name: response.name,
          description: response.description,
          price: response.price,
          offer: response.offer,
          status: response.status,
          request: {
            type: "GET",
            url: "http://localhost:" + process.env.PORT + "/api/products/" + response._id
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error handling on POST request for /products route.",
        "result": err
      });
    });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Product.findById(id)
    .exec()
    .then(response => {
      res.status(200).json({
        "message": "You discovered the /products with ID in GET method.",
        "id": id,
        "result": {
          _id: response._id,
          name: response.name,
          description: response.description,
          price: response.price,
          offer: response.offer,
          status: response.status,
          request: {
            type: "GET",
            url: "http://localhost:" + process.env.PORT + "/api/products/" + response._id
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error on discovered the /products with ID in GET method.",
        "id": id,
        "result": err
      });
    });
});

router.patch('/:id', (req, res, next) => {
  let body = req.body,
    id = req.params.id,
    updateRecords = {};

  if (body) {
    if (body.name) {
      updateRecords.name = body.name;
    }
    if (body.description) {
      updateRecords.description = body.description;
    }
    if (body.price) {
      updateRecords.price = body.price;
    }
    if (body.offer) {
      updateRecords.offer = body.offer;
    }
    if (body.status) {
      updateRecords.status = body.status;
    }
  }

  Product.update({ _id: id }, { $set: updateRecords })
    .exec()
    .then(response => {
      res.status(200).json({
        "message": "Handling UPDATE request for /products route.",
        "result": {
          _id: response._id,
          name: response.name,
          description: response.description,
          price: response.price,
          offer: response.offer,
          status: response.status,
          request: {
            type: "GET",
            url: "http://localhost:" + process.env.PORT + "/api/products/" + response._id
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error on handling UPDATE request for /products route.",
        "id": id,
        "body": updateRecords,
        "result": err
      });
    });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Product.deleteOne({ "_id": id })
    .exec()
    .then(response => {
      res.status(200).json({
        "message": "Handling DELETE request for /products route.",
        "result": {
          request: {
            type: "POST",
            url: "http://localhost:" + process.env.PORT + "/api/products",
            body: { 
              name: "String", 
              description: "String", 
              price: "Number" 
            }
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({
        "message": "Error on handling DELETE request for /products route.",
        "id": id,
        "result": err
      });
    });
});

/*
router.put('/:id', (req, res, next) => {
  let reqBody = req.body;
  res.status(200).json({
    "message": "Handling UPDATE request for /products route.",
    "id": req.params.id,
    "body": reqBody
  });
});
*/

module.exports = router;