# Chunk Mate Frontend

## Overview
Chunk Mate is a web application that allows users to upload documents, process them into logical fragments (chunks), and review previously processed documents and their associated chunks. This frontend application is built using React and Vite, providing a responsive and user-friendly interface.

## Features
- **Document Upload**: Users can upload markdown files (.md) through a simple drag-and-drop or file picker interface.
- **Chunk Processing**: Uploaded documents are processed on the server, dividing them into logical chunks based on paragraphs and headings.
- **Document History**: Users can view a list of all uploaded documents and their corresponding chunks, with options to download or copy each chunk.

## Project Structure
```
frontend
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components          # React components for the application
│   │   ├── ChunkBlock.tsx  # Component for displaying an individual chunk
│   │   ├── ChunkList.tsx   # Component for displaying chunks of a selected document
│   │   ├── DocumentList.tsx # Component for displaying a list of uploaded documents
│   │   ├── SideNav.tsx     # Navigation sidebar for selecting documents
│   │   └── UploadButton.tsx # Button for uploading documents
│   ├── pages
│   │   └── Home.tsx        # Main page component
│   ├── styles
│   │   └── GlobalStyle.ts   # Global styles using styled-components
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point for the React application
│   └── vite-env.d.ts       # TypeScript environment definitions
├── package.json             # Dependencies and scripts for the frontend application
└── tsconfig.json            # TypeScript configuration for the frontend
```

## Getting Started
1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd chunk-mate/frontend
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Run the Application**: 
   ```bash
   npm run dev
   ```

4. **Access the Application**: Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Development
- The frontend is built using React and Vite, ensuring a fast and efficient development experience.
- Styled-components are used for styling, allowing for modular and reusable styles.
