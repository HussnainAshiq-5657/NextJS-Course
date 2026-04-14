import mongoose from 'mongoose';

const ProductModel = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  university: String,
});
 export const Product  = mongoose.models.products || mongoose.model("products",ProductModel); 