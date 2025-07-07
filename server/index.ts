import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/connectDB';
import bookingRouter from './src/routes/booking.route';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', bookingRouter);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})