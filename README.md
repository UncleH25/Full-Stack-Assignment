# Full-Stack-Assignment

# 📝 Task Tracker App

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-black)
![Sequelize](https://img.shields.io/badge/ORM-Sequelize-orange)

A full-stack task management application built with React and Node.js.

_Built as part of a technical assessment demonstrating full-stack development, REST API design, and component-based architecture._

---

## 🚀 Overview

This project is a full-stack Task Tracker application that allows users to:

- Create tasks
- Update tasks
- Delete tasks
- Search tasks
- Manage task statuses

The application follows RESTful API design principles and clean component-based architecture.

---

## 🛠 Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express
- Sequelize
- PostgreSQL (or your database)

---

## 📂 Project Structure

```
├── client/
│       ├── node_modules/
│       ├── public/
│       │   ├── index.html
│       ├── src/
│       │   ├── components/
│       │   │   ├── searchBar.js
│       │   │   ├── taskBoard.js
│       │   │   ├── taskCard.js
│       │   │   ├── taskColumn.js
│       │   │   └── taskForm.js
│       │   │
│       │   ├── services/
│       │   │   └── api.js
│       │   │
│       │   ├── styles/
│       │   │   ├── App.css
│       │   │   ├── index.css
│       │   │   ├── searchbar.css
│       │   │   ├── taskBoard.css
│       │   │   ├── taskCard.css
│       │   │   ├── taskColumn.css
│       │   │   └── taskForm.css
│       │   │
│       │   ├── App.js
│       │   └── index.js
│       │
│       ├── .gitignore
│       ├── package.json
│       └── package-lock.json
│
├── server/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── .env
│   ├── app.js
│   ├── database.sqlite
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

git clone <repo-url>

### 2️⃣ Start Backend

cd server

npm install

npm start


Runs on:
http://localhost:5000

### 3️⃣ Start Frontend

cd client

npm install

npm start


Runs on:

http://localhost:3000

---

## 🔌 API Endpoints

| Method | Endpoint        | Description         |
|--------|-----------------|---------------------|
| GET    | /tasks          | Get all tasks       |
| POST   | /tasks          | Create new task     |
| PUT    | /tasks/:id      | Update a task       |
| DELETE | /tasks/:id      | Delete a task       |

---

## 🧠 Architecture

Frontend (React) communicates with Backend (Express API) using Axios over HTTP.

Backend uses Sequelize ORM to interact with the database.

---

## 📌 Future Improvements

- Authentication & user accounts
- Drag-and-drop task board
- Deployment to cloud platform
- Docker support
- Unit and integration testing

---

## 👨‍💻 Author

Jarryd O'Neill  
Computer Science Graduate  
Aspiring Full Stack & Software Developer
