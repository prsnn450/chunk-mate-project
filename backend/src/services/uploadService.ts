import { Request, Response } from 'express';
import Document from '../models/document';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { chunkDocument } from '../utils/chunker';
import Chunk from '../models/chunk';

// Configure multer for file uploads (move from uploadService.ts)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../uploads');
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });


export const uploadDocument = async (req: Request, res: Response) => {
  upload.single('document')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: 'File upload failed', error: err });
    }
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    try {
      // 1. Create document record
      const doc = await Document.create({
        title: req.file.originalname,
        filepath: req.file.path,
      });

      // 2. Read file content
      const content = fs.readFileSync(req.file.path, 'utf-8');

      // 3. Chunk the document
      const { chunks } = chunkDocument(content);

      // 4. Save chunks to DB
      for (let i = 0; i < chunks.length; i++) {
        await Chunk.create({
          document_id: doc.id,
          chunk_number: i + 1,
          content: chunks[i],
        });
      }

      return res.status(200).json({ message: 'File uploaded and chunked successfully', file: req.file, document: doc });
    } catch (error) {
      return res.status(500).json({ message: 'Error saving document record', error });
    }
  });
};