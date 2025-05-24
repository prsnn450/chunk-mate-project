import { Request, Response } from 'express';
import Document from '../models/document';
import { uploadDocument as uploadFile } from '../services/uploadService';
import * as chunkService from '../services/chunkService';

// Upload a new document
export const uploadDocument = async (req: Request, res: Response) => {
    try {
        // Call the uploadFile function directly
        uploadFile(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading document', error });
    }
};

// Get document history
export const getDocumentHistory = async (req: Request, res: Response) => {
    try {
        const documents = await Document.findAll();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving document history', error });
    }
};

// Get chunks of a specific document
export const getDocumentChunks = async (req: Request, res: Response) => {
    const { documentId } = req.params;
    try {
        const chunks = await chunkService.getChunksByDocumentId(Number(documentId));
        res.status(200).json(chunks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving document chunks', error });
    }
};