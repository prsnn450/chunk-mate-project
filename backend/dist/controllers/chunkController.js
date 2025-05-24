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
exports.getChunksByDocumentId = exports.createChunk = void 0;
const chunkService_1 = require("../services/chunkService");
const chunkService = new chunkService_1.ChunkService();
const createChunk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { documentId, content } = req.body;
        const chunk = yield chunkService.createChunk(documentId, content);
        res.status(201).json(chunk);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating chunk', error });
    }
});
exports.createChunk = createChunk;
const getChunksByDocumentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { documentId } = req.params;
        const chunks = yield chunkService.getChunksByDocumentId(documentId);
        res.status(200).json(chunks);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving chunks', error });
    }
});
exports.getChunksByDocumentId = getChunksByDocumentId;
