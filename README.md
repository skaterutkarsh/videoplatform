# Video Upload, Sensitivity Processing, and Streaming Application

## Overview
This is a full-stack web application that allows users to upload videos, processes them for content sensitivity analysis, and provides seamless streaming capabilities with real-time progress updates.  
The application supports multi-tenant architecture and role-based access control (RBAC) for Viewer, Editor, and Admin roles.

---

## Features

- **User Authentication:** JWT-based secure login and registration.
- **Role-Based Access Control:** Viewer, Editor, Admin roles.
- **Video Upload:** Upload videos with metadata handling.
- **Real-Time Processing:** Live progress updates using Socket.io.
- **Content Sensitivity Analysis:** Videos marked as `safe` or `flagged`.
- **Video Streaming:** HTTP range request support for efficient playback.
- **Video Library:** List uploaded videos with status indicators.
- **Responsive UI:** Built with React + Tailwind CSS for cross-platform support.

---

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Multer, FFmpeg, Socket.io, JWT
- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router, Socket.io-client
- **Hosting:** Render (backend), Vercel (frontend)
- **Storage:** Local uploads (can be replaced with AWS S3 or Google Cloud Storage)

---

## Project Structure

video-platform/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── utils/
│ ├── config/
│ ├── uploads/
│ ├── app.js
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── api.js
│ │ ├── socket.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
├── README.md
└── .gitignore

---

## Setup Instructions

### Backend
1. Navigate to the backend directory:
cd backend
Install dependencies:
npm install
Create a .env file with the following content:
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
Start the backend server:
npm run dev
### Frontend
Navigate to the frontend directory:
cd frontend
Install dependencies:
npm install
Create a .env file for Vite:
VITE_API_URL=http://localhost:5000/api
Start the frontend dev server:
npm run dev
