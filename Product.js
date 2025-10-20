
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  id: String,
  title: String,
  brand: String,
  desc: String,
  price: Number,
  img: String,
  stock: Number,
});
module.exports = mongoose.model('Product', ProductSchema);
