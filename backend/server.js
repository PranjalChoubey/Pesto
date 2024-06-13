import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 5000;

connectDB();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


app.listen(port, () => console.log(`server running on port 5000`)); 