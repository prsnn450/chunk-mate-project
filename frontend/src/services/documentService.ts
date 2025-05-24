import api from './api';
import { Document, Chunk } from '../types/types';

export const getDocuments = async (): Promise<Document[]> => {
  const response = await api.get('/documents/history');
  return response.data;
};

export const getChunks = async (documentId: number): Promise<Chunk[]> => {
  const response = await api.get(`/chunks/${documentId}/chunks`);
  return response.data;
};

export const uploadDocument = async (formData: FormData): Promise<Document> => {
  const response = await api.post('/documents/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.document;
};