const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
// import
const ProductsModel = require("./models/Product");
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Adidas");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/api/data", async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Products details
app.get("/api/data/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await ProductsModel.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
