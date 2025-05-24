"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chunkController_1 = require("../controllers/chunkController");
const router = (0, express_1.Router)();
// Route to create a new chunk
router.post('/:documentId/chunks', chunkController_1.createChunk);
// Route to get all chunks for a specific document
router.get('/:documentId/chunks', chunkController_1.getChunksByDocumentId);
exports.default = router;
