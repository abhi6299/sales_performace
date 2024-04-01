// models/Sale.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saleSchema = new Schema({
  month: { type: String, required: true },
  revenue: { type: Number, required: true },
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
