const Mongoose = require('mongoose');

const productSchema = Mongoose.Schema({
  _id: Mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  description: { type: String, default: null },
  price: {type: Number, required: true},
  offer: { type: Number, default: 0 },
  status: { type: Number, default: 1 }
});

module.exports = Mongoose.model("Product", productSchema);