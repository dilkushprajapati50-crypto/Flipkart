
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Temporary: in-memory fallback if DB empty
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.post('/', async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.json(p);
});

module.exports = router;
