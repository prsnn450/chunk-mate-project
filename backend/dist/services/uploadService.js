"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadDocument = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Configure multer for file uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path_1.default.join(__dirname, '../../uploads');
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage });
// Upload service to handle document uploads
const uploadDocument = (req, res) => {
    upload.single('document')(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: 'File upload failed', error: err });
        }
        // Here you can add logic to process the uploaded file
        return res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    });
};
exports.uploadDocument = uploadDocument;
