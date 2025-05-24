"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocumentChunks = exports.getDocumentHistory = exports.uploadDocument = void 0;
const document_1 = require("../models/document");
const uploadService_1 = require("../services/uploadService");
const chunkService_1 = require("../services/chunkService");
// Upload a new document
const uploadDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const document = yield uploadService_1.uploadService.saveDocument(file);
        res.status(201).json(document);
    }
    catch (error) {
        res.status(500).json({ message: 'Error uploading document', error });
    }
});
exports.uploadDocument = uploadDocument;
// Get document history
const getDocumentHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const documents = yield document_1.Document.findAll();
        res.status(200).json(documents);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving document history', error });
    }
});
exports.getDocumentHistory = getDocumentHistory;
// Get chunks of a specific document
const getDocumentChunks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { documentId } = req.params;
    try {
        const chunks = yield chunkService_1.chunkService.getChunksByDocumentId(documentId);
        res.status(200).json(chunks);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving document chunks', error });
    }
});
exports.getDocumentChunks = getDocumentChunks;
