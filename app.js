import express from 'express';
import cors from 'cors';
import connectDB from './config/db.config.js';
import productRoutes from './routes/product.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Connect to Database
connectDB();


// Root Route to return JSON text
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Toronto Dresss Online Application!' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});