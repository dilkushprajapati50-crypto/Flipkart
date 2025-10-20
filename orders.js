
const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const Order = require('../models/Order');

const razorpay = new Razorpay({
  key_id: process.env.RZP_KEY_ID,
  key_secret: process.env.RZP_KEY_SECRET,
});

router.post('/create-order', async (req, res) => {
  const { amount, currency, receipt } = req.body;
  try {
    const resp = await razorpay.orders.create({ amount, currency: currency || 'INR', receipt });
    res.json(resp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/save', async (req, res) => {
  const { orderId, items, total, info, status } = req.body;
  const o = new Order({ orderId, items, total, info, status });
  await o.save();
  res.json(o);
});

module.exports = router;
