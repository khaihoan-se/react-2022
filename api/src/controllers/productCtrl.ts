import Products from '../models/productModel';
import { APIfeatures } from '../lib/features';

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            const features = new APIfeatures(Products.find(), req.query)
            .paginating().sorting().searching().filtering(); // Products.find()

            const result = await Promise.allSettled([
                features.query,
                Products.countDocuments()
            ])
            const products = result[0].status === 'fulfilled' ? result[0].value : [];
            const count = result[1].status === 'fulfilled' ? result[1].value : 0;

            return res.status(200).json({products, count});  // return all products
        } catch (error) {
            return res.status(500).json({ message: error.message }); // 500 Internal Server Error
        }
    },
    getProduct: async (req, res) => {
        try {
            const product = await Products.findById(req.params.id); // find product by id

            if (!product) {
                return res.status(404).json({ message: 'Product not found! sorry' }); // 404 Not Found
            }

            return res.status(200).json(product); // return product
        } catch (error) {
            return res.status(500).json({ message: error.message }); // 500 Internal Server Error
        }
    },
    createProduct: async (req, res) => {
        try {
            const newProduct = new Products(req.body); // create new product
            await newProduct.save(); // save product
            return res.status(201).json(newProduct); // return new product
        } catch (error) {
            return res.status(500).json({ message: error.message }); // 500 Internal Server Error
        }
    },
    updateProduct: async (req, res) => {
        try {
            const product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true }); // find product by id and update

            if (!product) {
                return res.status(404).json({ message: 'Product not found! sorry' }); // 404 Not Found
            }

            return res.status(200).json(product); // return updated product
        } catch (error) {
            return res.status(500).json({ message: error.message }); // 500 Internal Server Error
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await Products.findByIdAndDelete(req.params.id); // find product by id and delete

            if (!product) {
                return res.status(404).json({ message: 'Product not found! sorry' }); // 404 Not Found
            }

            return res.status(200).json({ message: 'Delete product successfully' }); // return deleted product
        } catch (error) {
            return res.status(500).json({ message: error.message }); // 500 Internal Server Error
        }
    }
}

export default productCtrl;