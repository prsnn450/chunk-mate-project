import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import documentRoutes from './routes/documentRoutes';
import chunkRoutes from './routes/chunkRoutes';
import referenceRoutes from './routes/referenceRoutes';
import pool from './db'; // Rename to pool for clarity

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// No need to call pool() or connectToDatabase()

// Routes
app.use('/api/documents', documentRoutes);
app.use('/api/chunks', chunkRoutes);
app.use('/api/references', referenceRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});