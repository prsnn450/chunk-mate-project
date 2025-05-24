import { Router } from 'express';
import { createChunk, getChunksByDocumentIdHandler } from '../controllers/chunkController';

const router = Router();

// Route to create a new chunk
router.post('/:documentId/chunks', createChunk);

// Route to get all chunks for a specific document
router.get('/:documentId/chunks', getChunksByDocumentIdHandler);

export default router;