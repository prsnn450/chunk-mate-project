"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkDocument = void 0;
const chunkDocument = (documentContent) => {
    const paragraphs = documentContent.split(/\n\s*\n/); // Split by double newlines for paragraphs
    const chunks = [];
    const references = [];
    paragraphs.forEach((paragraph, index) => {
        const chunk = {
            id: index + 1,
            content: paragraph,
            headings: extractHeadings(paragraph),
        };
        chunks.push(chunk);
        const links = extractLinks(paragraph);
        links.forEach(link => {
            references.push({
                documentId: documentContent.id,
                chunkId: chunk.id,
                url: link,
            });
        });
    });
    return { chunks, references };
};
exports.chunkDocument = chunkDocument;
const extractHeadings = (paragraph) => {
    const headingRegex = /^(#+)\s+(.*)$/gm; // Regex to match headings
    const headings = [];
    let match;
    while ((match = headingRegex.exec(paragraph)) !== null) {
        headings.push(match[2]); // Push the heading text
    }
    return headings;
};
const extractLinks = (paragraph) => {
    const linkRegex = /https?:\/\/[^\s]+/g; // Regex to match URLs
    return paragraph.match(linkRegex) || [];
};
