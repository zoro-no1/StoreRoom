# StoreRoom

A full-stack web application for managing and sharing links and posts, built with:

- **Frontend:** React + TypeScript + Vite + TailwindCSS
- **Backend:** Node.js + Express + MongoDB + Mongoose

## Features

- User authentication (sign up, login, logout)
- Create, delete, and manage posts
- Tagging system for posts
- Shareable links
- Protected routes with JWT authentication

## Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── DB/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── router/
│   │   ├── utils/
│   │   └── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── icons/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB database (Atlas or local)

### Backend Setup

1. Go to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file (see `.env.example` or use the provided one):

   ```
   PORT=4000
   JWT_TOKEN=your_jwt_secret
   MD_URI=your_mongodb_connection_string
   ```

4. Start the backend server:

   ```sh
   npm run dev
   ```

### Frontend Setup

1. Go to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

### Backend

- `npm run dev` — Start backend with nodemon

### Frontend

- `npm run dev` — Start frontend dev server
- `npm run build` — Build frontend for production
- `npm run lint` — Lint frontend code

## License

MIT

---

> Built with ❤️ using React, Node.js, and MongoDB.