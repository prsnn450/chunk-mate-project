import React, { useState, useEffect } from 'react';
import { getDocuments, getChunks } from '../services/documentService';
import { Document, Chunk } from '../types/types';

const HomePage: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);
  const [chunks, setChunks] = useState<Chunk[]>([]);
  const [selectedChunkIdx, setSelectedChunkIdx] = useState<number>(0);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docs = await getDocuments();
        setDocuments(docs);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
    fetchDocuments();
  }, []);

  const handleDocSelect = async (docId: number) => {
    try {
      const docChunks = await getChunks(docId);
      setSelectedDoc(docId);
      setChunks(docChunks);
      setSelectedChunkIdx(0); // Always select first chunk
    } catch (error) {
      console.error('Error fetching chunks:', error);
    }
  };

  const handleUploadSuccess = async () => {
    setSelectedDoc(null);
    setChunks([]);
    setSelectedChunkIdx(0);
    const docs = await getDocuments();
    setDocuments(docs);
  };

  return (
    <div className="home-page">
      {/* Left Sidebar */}
      <div className="left-panel">
        <div style={{ fontWeight: 600, fontSize: 22, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <span role="img" aria-label="doc" style={{ fontSize: 28 }}>📄</span>
          Chunk Mate
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {documents.map(doc => (
            <li
              key={doc.id}
              onClick={() => handleDocSelect(doc.id)}
              className={selectedDoc === doc.id ? 'selected' : ''}
              style={{
                padding: '10px 0 10px 16px',
                background: selectedDoc === doc.id ? '#fff' : 'transparent',
                fontWeight: selectedDoc === doc.id ? 600 : 400,
                color: selectedDoc === doc.id ? '#222' : '#444',
                cursor: 'pointer'
              }}
            >
              {doc.title}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto' }}>
          <label htmlFor="file-upload" className="upload-label" style={{ marginTop: 24, textAlign: 'center' }}>
            Upload
            <input
              id="file-upload"
              type="file"
              accept=".md"
              style={{ display: 'none' }}
              onChange={async (e) => {
                if (!e.target.files) return;
                const file = e.target.files[0];
                if (!file) return;
                try {
                  const formData = new FormData();
                  formData.append('document', file);
                  await fetch('http://localhost:5000/api/documents/upload', {
                    method: 'POST',
                    body: formData,
                  });
                  await handleUploadSuccess();
                } catch (error) {
                  alert('Upload failed. Please try again.');
                }
              }}
            />
          </label>
        </div>
      </div>
      {/* Center Panel: Chunk Content */}
      <div className="center-panel">
  {selectedDoc && chunks.length > 0 ? (
    <>
      <h2 style={{ marginTop: 0, marginBottom: 24, fontWeight: 600 }}>
        {documents.find(d => d.id === selectedDoc)?.title}
      </h2>
      <div className="content-panel">
        <div style={{
          fontSize: 17,
          color: '#222',
          fontWeight: 500,
          background: '#f9eec7',
          borderRadius: 6,
          padding: '18px',
          width: '100%',
          height: '100%',
          overflowY: 'auto'
        }}>
          {chunks[selectedChunkIdx]?.content}
        </div>
      </div>
    </>
  ) : (
    <div className="empty-state" style={{ color: '#888', textAlign: 'center', marginTop: 120, fontSize: 20 }}>
      Select a document to view its chunks.
    </div>
  )}
</div>
      {/* Right Panel: Chunk Numbers */}
      <div className="right-panel">
        {selectedDoc && chunks.length > 0 && (
          <div className="chunk-numbers">
            {chunks.map((chunk, idx) => (
  <div
    key={chunk.id}
    className={`chunk-number${selectedChunkIdx === idx ? ' selected' : ''}`}
    style={{
      padding: '0.5rem',
      textAlign: 'center',
      background: selectedChunkIdx === idx ? '#4a6fa5' : '#eaeaea',
      color: selectedChunkIdx === idx ? '#fff' : '#222',
      borderRadius: 4,
      cursor: 'pointer',
      fontWeight: selectedChunkIdx === idx ? 'bold' : 'normal',
      marginBottom: 8
    }}
    onClick={() => setSelectedChunkIdx(idx)}
  >
    {chunk.chunkNumber ?? idx + 1}
  </div>
))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;