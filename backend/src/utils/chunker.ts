type ReferenceType = {
  documentId: number;
  chunkId: number;
  url: string;
};

function extractLinks(text: string): string[] {
  const regex = /\[.*?\]\((.*?)\)/g;
  const links: string[] = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    links.push(match[1]);
  }
  return links;
}

export const chunkDocument = (
  documentContent: string
): { chunks: string[]; references: ReferenceType[] } => {
  const lines = documentContent.split(/\r?\n/);
  const chunks: string[] = [];
  const references: ReferenceType[] = [];

  let headings: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line === '') {
      i++;
      continue;
    }

    // Table detection: line starts and ends with | and has at least one more |
    if (/^\|.*\|\s*$/.test(line) && line.includes('|')) {
      // Parse table header
      const headerLine = line;
      const headerCells = headerLine
        .split('|')
        .map((cell) => cell.trim())
        .filter((cell) => cell.length > 0);

      // Skip separator line (---)
      i++;
      while (i < lines.length && /^\|?[-\s|]+\|?$/.test(lines[i].trim())) {
        i++;
      }

      // Parse table rows
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i].trim())) {
        const rowLine = lines[i].trim();
        const rowCells = rowLine
          .split('|')
          .map((cell) => cell.trim())
          .filter((cell) => cell.length > 0);

        let chunkText = '';
        for (let j = 0; j < headerCells.length && j < rowCells.length; j++) {
          chunkText += `${headerCells[j]}: ${rowCells[j]}\n`;
        }
        chunkText = chunkText.trim();
        if (chunkText.length > 0) {
          chunks.push(chunkText);
          const links = extractLinks(chunkText);
          links.forEach((link) => {
            references.push({
              documentId: 0,
              chunkId: chunks.length,
              url: link,
            });
          });
        }
        i++;
      }
      continue;
    }

    // Heading detection
    if (/^#+\s/.test(line) || /^#+\t/.test(line)) {
      headings.push(line);
      i++;
      continue;
    }

    // For each non-heading, non-empty line, create a chunk with current headings + this line
    if (headings.length > 0) {
      const chunkText = headings.join('\n') + '\n' + line;
      chunks.push(chunkText);
      const links = extractLinks(chunkText);
      links.forEach((link) => {
        references.push({
          documentId: 0,
          chunkId: chunks.length,
          url: link,
        });
      });
    } else {
      // No headings, just the line
      chunks.push(line);
      const links = extractLinks(line);
      links.forEach((link) => {
        references.push({
          documentId: 0,
          chunkId: chunks.length,
          url: link,
        });
      });
    }
    i++;
  }

  return { chunks, references };
};