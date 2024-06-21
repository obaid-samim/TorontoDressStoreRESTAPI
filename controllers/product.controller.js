import Product from '../models/product.model.js';


// Create and Save a new Product
export const createProduct = async (req, res) => {
    const { name, description, price, quantity, category } = req.body;
    const product = new Product({ name, description, price, quantity, category });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Retrieve all Products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve a single Product by id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Product by id
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Product by id
export const deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all Products
export const deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.json({ message: 'All products deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find products by name
export const findProductsByName = async (req, res) => {
    try {
        const products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};