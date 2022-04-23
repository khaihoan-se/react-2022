import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: {type: String, required: true },
    banner: {type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true }
},{
    timestamps: true
});

productSchema.index({title: 'text'}) // search by title

const Products = mongoose.model("Products", productSchema); // Products is the name of the collection

Products.createIndexes({title: 'text'}) // search by title

export default Products;