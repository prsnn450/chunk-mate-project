import { Request, Response } from 'express';
import Reference from '../models/reference';

// Create a new reference
export const createReference = async (req: Request, res: Response) => {
    try {
        const { documentId, chunkId, url, description } = req.body;
        const newReference = await Reference.create({ documentId, chunkId, url, description });
        res.status(201).json(newReference);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reference', error });
    }
};

// Get all references for a specific document and chunk
export const getReferences = async (req: Request, res: Response) => {
    const { documentId, chunkId } = req.params;
    try {
        const references = await Reference.findAll({ where: { documentId, chunkId } });
        res.status(200).json(references);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving references', error });
    }
};

// Delete a reference by ID
export const deleteReference = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedReference = await Reference.destroy({ where: { id } });
        if (deletedReference) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Reference not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting reference', error });
    }
};