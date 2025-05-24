"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const referenceController_1 = require("../controllers/referenceController");
const router = (0, express_1.Router)();
// Route to create a new reference
router.post('/', referenceController_1.createReference);
// Route to get references by chunk ID
router.get('/:chunkId', referenceController_1.getReferencesByChunkId);
// Route to delete a reference
router.delete('/:id', referenceController_1.deleteReference);
exports.default = router;
