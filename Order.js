
const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  orderId: String,
  items: Array,
  total: Number,
  info: Object,
  status: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
