# Chunk Mate Backend

## Overview
Chunk Mate is a web application designed to allow users to upload documents, process them into logical fragments (chunks), and review previously processed documents and their associated chunks. This backend documentation provides an overview of the structure, setup, and functionality of the backend services.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building APIs.
- **PostgreSQL**: Relational database for storing document and chunk data.
- **TypeScript**: Superset of JavaScript for type safety and better tooling.

## Project Structure
The backend is organized into several directories and files:

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains controller files that handle incoming requests and responses.
    - `chunkController.ts`: Handles chunk-related requests.
    - `documentController.ts`: Manages document uploads and retrieval.
    - `referenceController.ts`: Manages hyperlink references.
  - **models/**: Contains model definitions for the database.
    - `chunk.ts`: Defines the Chunk model.
    - `document.ts`: Defines the Document model.
    - `reference.ts`: Defines the Reference model.
  - **routes/**: Contains route definitions for the API endpoints.
    - `chunkRoutes.ts`: Defines routes for chunk-related operations.
    - `documentRoutes.ts`: Defines routes for document-related operations.
    - `referenceRoutes.ts`: Defines routes for reference-related operations.
  - **services/**: Contains business logic and services.
    - `chunkService.ts`: Contains logic for processing chunks.
    - `uploadService.ts`: Handles file uploads.
  - **utils/**: Contains utility functions.
    - `chunker.ts`: Contains functions for chunking documents.
  - `db.ts`: Manages the database connection.
  - `app.ts`: Initializes the Express application and middleware.
  - `server.ts`: Starts the server and listens for requests.

## Setup Instructions
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd chunk-mate/backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Database Setup**
   - Ensure PostgreSQL is installed and running.
   - Create a database for the application.
   - Run the SQL schema located in `database/schema.sql` to set up the necessary tables.

4. **Configuration**
   - Update the database connection settings in `src/db.ts` as needed.

5. **Run the Application**
   ```
   npm start
   ```

## API Endpoints
The backend exposes several API endpoints for interacting with documents and chunks. Refer to the route files in the `routes` directory for detailed endpoint information.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.