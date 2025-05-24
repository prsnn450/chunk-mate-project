import Chunk from '../models/chunk';
import Document from '../models/document';
import Reference from '../models/reference';
import { chunkDocument } from '../utils/chunker';

export const processDocumentChunks = async (documentId: number, content: string) => {
    const { chunks } = chunkDocument(content);
    const chunkPromises = chunks.map(async (chunkContent: string, index: number) => {
        const chunk = new Chunk({
            documentId,
            content: chunkContent,
            chunkNumber: index + 1,
        });
        await chunk.save();
        return chunk;
    });
    return await Promise.all(chunkPromises);
};

export const getChunksByDocumentId = async (documentId: number) => {
    return await Chunk.findAll({ where: { document_id: documentId } });
};