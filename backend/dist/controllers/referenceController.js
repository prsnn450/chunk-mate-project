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
exports.deleteReference = exports.getReferences = exports.createReference = void 0;
const reference_1 = require("../models/reference");
// Create a new reference
const createReference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { documentId, chunkId, url, description } = req.body;
        const newReference = yield reference_1.Reference.create({ documentId, chunkId, url, description });
        res.status(201).json(newReference);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating reference', error });
    }
});
exports.createReference = createReference;
// Get all references for a specific document and chunk
const getReferences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { documentId, chunkId } = req.params;
    try {
        const references = yield reference_1.Reference.findAll({ where: { documentId, chunkId } });
        res.status(200).json(references);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving references', error });
    }
});
exports.getReferences = getReferences;
// Delete a reference by ID
const deleteReference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedReference = yield reference_1.Reference.destroy({ where: { id } });
        if (deletedReference) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: 'Reference not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting reference', error });
    }
});
exports.deleteReference = deleteReference;
