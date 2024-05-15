const mongoose = require("mongoose");

const categorychema = new mongoose.Schema({
    category: String,
});

const CategoryModel = mongoose.model("categories", categorychema);
module.exports = CategoryModel