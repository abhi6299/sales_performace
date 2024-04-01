// routes/sales.js

const router = require('express').Router();
let Sale = require('../models/Sale');

// Get all sales data
router.route('/').get((req, res) => {
  Sale.find()
    .then(sales => res.json(sales))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new sale
router.route('/add').post((req, res) => {
  const { month, revenue } = req.body;

  const newSale = new Sale({ month, revenue });

  newSale
    .save()
    .then(() => res.json('Sale added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
