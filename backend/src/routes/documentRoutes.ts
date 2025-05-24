import express from 'express';
import { uploadDocument, getDocumentHistory } from '../controllers/documentController';

const router = express.Router();

// Route to upload a document
router.post('/upload', uploadDocument);

// Route to get the history of uploaded documents
router.get('/history', getDocumentHistory);

export default router;