# Chunk Mate Database Setup

This document provides an overview of the database setup for the Chunk Mate web application. The application uses a PostgreSQL database to store information about uploaded documents, their associated chunks, and hyperlink references.

## Database Schema

The database schema is defined in the `schema.sql` file located in the `database` directory. This file contains the SQL commands necessary to create the required tables and relationships.

### Tables

1. **Documents Table**
   - Stores details about each uploaded document.
   - Fields include:
     - `id`: Primary key
     - `title`: Title of the document
     - `uploaded_at`: Timestamp of when the document was uploaded

2. **Chunks Table**
   - Stores the logical chunks derived from the documents.
   - Fields include:
     - `id`: Primary key
     - `document_id`: Foreign key referencing the Documents table
     - `chunk_number`: The order of the chunk in the document
     - `content`: The text content of the chunk

3. **References Table**
   - Stores hyperlinks present in the chunks.
   - Fields include:
     - `id`: Primary key
     - `chunk_id`: Foreign key referencing the Chunks table
     - `url`: The hyperlink URL
     - `description`: A brief description of the link

## Database Connection

The application connects to the PostgreSQL database using the configuration specified in the `db.ts` file located in the `backend/src` directory. Ensure that the database is properly configured and accessible before running the application.

## Setup Instructions

1. **Install PostgreSQL**: Ensure that PostgreSQL is installed on your machine or server.

2. **Create Database**: Create a new database for the Chunk Mate application.

3. **Run Schema**: Execute the SQL commands in `schema.sql` to create the necessary tables.

4. **Configure Connection**: Update the database connection settings in `db.ts` to match your PostgreSQL setup.

5. **Start Application**: Once the database is set up, you can start the backend server, and it will interact with the database as required.

## Additional Notes

- Ensure that you have the necessary permissions to create tables and manage the database.
- Regularly back up your database to prevent data loss.
- For any issues related to database connectivity or schema, refer to the backend logs for troubleshooting.