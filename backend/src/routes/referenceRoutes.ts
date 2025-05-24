import { Router } from 'express';
import { 
    createReference, 
    getReferences, 
    deleteReference 
} from '../controllers/referenceController';

const router = Router();

// Route to create a new reference
router.post('/', createReference);

// Route to get references by chunk ID
router.get('/:chunkId', getReferences);

// Route to delete a reference
router.delete('/:id', deleteReference);

export default router;