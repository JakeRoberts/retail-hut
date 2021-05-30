const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
  title: { type: String, required: true },

  price: { type: Number, required: true },

  image: { type: String, default: "", required: true },

  description: { type: String, required: true, },

  stock: { type: Number, required: true },

  tags:{ type: Array },
 
  category: { type: Schema.Types.ObjectId, ref: "Category"},

});
const Product = mongoose.model("Product", productSchema)
 
module.exports = Product;



