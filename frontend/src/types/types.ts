export interface Document {
  id: number;
  title: string;
  filepath: string;
  createdAt: string;
}

export interface Chunk {
  id: number;
  documentId: number;
  chunkNumber: number;
  content: string;
}

export interface Reference {
  id: number;
  documentId: number;
  chunkId: number;
  url: string;
  description?: string;
}