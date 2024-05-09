const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  url: String,
  gender: String,
  tag: String,
});

const ProductsModel = mongoose.model("products", productSchema);
module.exports = ProductsModel
