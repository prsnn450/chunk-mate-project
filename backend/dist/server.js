"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const documentRoutes_1 = __importDefault(require("./routes/documentRoutes"));
const chunkRoutes_1 = __importDefault(require("./routes/chunkRoutes"));
const referenceRoutes_1 = __importDefault(require("./routes/referenceRoutes"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Connect to the database
(0, db_1.connectToDatabase)();
// Routes
app.use('/api/documents', documentRoutes_1.default);
app.use('/api/chunks', chunkRoutes_1.default);
app.use('/api/references', referenceRoutes_1.default);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
