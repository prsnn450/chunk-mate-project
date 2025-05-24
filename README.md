# Chunk Mate

Chunk Mate is a web application that allows users to upload markdown documents, automatically split them into logical fragments ("chunks"), and review previously processed documents and their associated chunks. The stack includes a React + TypeScript frontend, an Express.js + TypeScript backend, and a PostgreSQL database.

---

## Features

- **Document Upload:** Upload markdown (`.md`) files via a user-friendly interface.
- **Automatic Chunking:** Server-side logic splits documents into logical chunks (sections, paragraphs, tables).
- **Document History:** View all previously uploaded documents and their chunks.
- **Chunk Navigation:** Easily browse and view chunks for any document.
- **Reference Extraction:** Hyperlinks in documents are extracted and tracked.

---

## Project Structure

```
chunk-mate/
├── backend/         # Express.js + TypeScript backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.ts
│   │   ├── db.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend/        # React + TypeScript frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── database/
│   ├── schema.sql   # PostgreSQL schema
│   └── README.md
└── README.md        # (This file)
```

---

## Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (v7+ recommended)
- **PostgreSQL** (v12+ recommended)

---

## 1. Database Setup

1. **Install PostgreSQL**  
   Download and install from [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

2. **Create Database and User**  
   Open a terminal or command prompt and run:
   ```sh
   psql -U postgres
   ```
   Then, in the `psql` shell:
   ```sql
   CREATE DATABASE chunkmate;
   CREATE USER chunkmate_user WITH PASSWORD 'yourpassword';
   GRANT ALL PRIVILEGES ON DATABASE chunkmate TO chunkmate_user;
   ```

3. **Run the Schema**  
   From your project root:
   ```sh
   psql -U chunkmate_user -d chunkmate -f database/schema.sql
   ```

4. **Configure Connection**  
   In `backend/src/db.ts`, ensure your credentials match:
   ```ts
   user: 'chunkmate_user',
   password: 'yourpassword',
   database: 'chunkmate',
   host: 'localhost',
   port: 5432,
   ```
5. **Connect to DB in cmd**
   "C:\Program Files\PostgreSQL\13\bin\psql.exe" -U chunkmate_user -d chunkmate   
   Enter the password when requested
   View the psql terminal
   Run CMD queries to handle the data
   

---

## 2. Backend Setup

1. **Install Dependencies**
   ```sh
   cd backend
   npm install
   ```

2. **Start the Backend Server**
   ```sh
   npm run dev
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

---

## 3. Frontend Setup

1. **Install Dependencies**
   ```sh
   cd ../frontend
   npm install
   ```

2. **Start the Frontend**
   ```sh
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

## 4. Usage

- **Upload Documents:**  
  Use the "Upload" button in the sidebar to upload `.md` files.
- **View Documents:**  
  Select a document from the left panel to view its chunks.
- **Browse Chunks:**  
  Use the right panel to navigate between chunks.

---

## 5. Troubleshooting

- **Database Connection Errors:**  
  Ensure PostgreSQL is running and credentials in `backend/src/db.ts` are correct.
- **Port Conflicts:**  
  Change the port in `backend/src/server.ts` or `frontend/vite.config.js` if needed.
- **CORS Issues:**  
  The backend enables CORS by default.

---

## 6. Development Notes

- **Backend:**  
  - Written in TypeScript, uses Sequelize ORM.
  - API endpoints are under `/api/`.
- **Frontend:**  
  - Written in React + TypeScript, uses Vite for fast development.
  - API requests are proxied to the backend.

---

## 7. License

MIT License. See the LICENSE file for details.

---

## 8. Contributing

Pull requests and issues are welcome!

---

## 9. Credits

- Built with [React](https://react.dev/), [Express](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/), and [PostgreSQL](https://www.postgresql.org/).
