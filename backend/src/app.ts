import express from 'express';
import bodyParser from 'body-parser';
import documentRoutes from './routes/documentRoutes';
import chunkRoutes from './routes/chunkRoutes';
import referenceRoutes from './routes/referenceRoutes';
// Remove this line:
// import connectToDatabase from './db';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// No need to call connectToDatabase()

// Routes
app.use('/api/documents', documentRoutes);
app.use('/api/chunks', chunkRoutes);
app.use('/api/references', referenceRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});