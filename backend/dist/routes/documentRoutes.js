"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const documentController_1 = require("../controllers/documentController");
const router = express_1.default.Router();
// Route to upload a document
router.post('/upload', documentController_1.uploadDocument);
// Route to get the history of uploaded documents
router.get('/history', documentController_1.getDocumentHistory);
exports.default = router;
