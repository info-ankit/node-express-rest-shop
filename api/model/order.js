const Mongoose = require('mongoose');

const orderSchema = Mongoose.Schema({
  _id: Mongoose.Schema.Types.ObjectId,
  productId: {type: Mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
  quentity: Number,
  orderPrice: Number,
  status: Number,
  sallerId: String,
  orderDate: Number
});

module.exports = Mongoose.model("Order", orderSchema);