import { Request, Response } from 'express';
import { processDocumentChunks, getChunksByDocumentId } from '../services/chunkService';

export const createChunk = async (req: Request, res: Response) => {
    try {
        const { documentId, content } = req.body;
        const chunks = await processDocumentChunks(documentId, content);
        res.status(201).json(chunks);
    } catch (error) {
        res.status(500).json({ message: 'Error creating chunk', error });
    }
};

export const getChunksByDocumentIdHandler = async (req: Request, res: Response) => {
    try {
        const { documentId } = req.params;
        const chunks = await getChunksByDocumentId(Number(documentId));
        res.status(200).json(chunks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving chunks', error });
    }
};