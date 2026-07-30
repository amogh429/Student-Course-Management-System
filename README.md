# 🎓 Student Course Management System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application developed during the **Codveda Technologies Full Stack Development Internship**. The system enables administrators to efficiently manage students, courses, and enrollments through a secure, role-based platform with real-time updates using **Socket.IO**.

---

## 📌 Project Overview

The Student Course Management System is designed to simplify academic administration by providing a centralized platform for managing:

- 👨‍🎓 Students
- 📚 Courses
- 📝 Enrollments
- 🔐 User Authentication & Authorization
- 📊 Dashboard Analytics
- ⚡ Real-time Updates

The project demonstrates modern full-stack web development practices using the MERN stack and follows a modular architecture for scalability and maintainability.

---

# 🚀 Features

## 🔐 Authentication & Authorization

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Access Control (Admin & Student)

---

## 👨‍🎓 Student Management

- Add Student
- View Students
- Update Student
- Delete Student
- Real-time Student Updates

---

## 📚 Course Management

- Add Course
- View Courses
- Update Course
- Delete Course
- Real-time Course Updates

---

## 📝 Enrollment Management

- Enroll Students into Courses
- View Enrollments
- Update Enrollment
- Delete Enrollment
- Real-time Enrollment Updates

---

## 📊 Dashboard

- Total Students
- Total Courses
- Total Enrollments
- Quick Navigation
- System Summary

---

## ⚡ Real-Time Communication

Implemented using **Socket.IO**

Whenever:

- A student is added
- A course is updated
- An enrollment is deleted

All connected users instantly receive updates without refreshing the page.

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS

## Backend

- Node.js
- Express.js
- JWT
- bcrypt
- Socket.IO

## Database

- MongoDB
- Mongoose

## Tools

- Git
- GitHub
- Thunder Client
- Visual Studio Code

---

# 📂 Project Structure

```
Student-Course-Management-System
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── socket.js
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   │   ├── courses
│   │   │   ├── enrollments
│   │   │   ├── layout
│   │   │   └── students
│   │   │
│   │   ├── pages
│   │   ├── services
│   │   ├── socket.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 🔄 Application Workflow

```
React Frontend
        │
        ▼
Axios API Requests
        │
        ▼
Express.js REST API
        │
        ▼
JWT Authentication Middleware
        │
        ▼
Controllers
        │
        ▼
MongoDB Database
```

Real-Time Flow

```
Admin Action
      │
      ▼
MongoDB Updated
      │
      ▼
Socket.IO Event
      │
      ▼
Connected Clients
      │
      ▼
Automatic UI Refresh
```

---

# 🗄️ Database Collections

## User

- Name
- Email
- Password
- Role

---

## Student

- Student Name
- Student ID
- Email
- Department
- Semester

---

## Course

- Course Name
- Course Code
- Credits
- Description

---

## Enrollment

- Student
- Course
- Enrollment Date
- Status

---

# 🔌 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Students

| Method | Endpoint |
|---------|----------|
| GET | `/api/students` |
| POST | `/api/students` |
| PUT | `/api/students/:id` |
| DELETE | `/api/students/:id` |

---

## Courses

| Method | Endpoint |
|---------|----------|
| GET | `/api/courses` |
| POST | `/api/courses` |
| PUT | `/api/courses/:id` |
| DELETE | `/api/courses/:id` |

---

## Enrollments

| Method | Endpoint |
|---------|----------|
| GET | `/api/enrollments` |
| POST | `/api/enrollments` |
| PUT | `/api/enrollments/:id` |
| DELETE | `/api/enrollments/:id` |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/amogh429/Student-Course-Management-System.git
```

---

## Backend Setup

```bash
cd Backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 🧪 Testing

The application was tested using:

- Thunder Client
- Browser Testing
- Manual CRUD Testing
- JWT Authentication Testing
- Role-Based Authorization Testing
- Socket.IO Real-Time Testing

---

# 📈 Future Enhancements

- Student Search
- Advanced Filtering
- Attendance Management
- Grade Management
- Faculty Module
- Email Notifications
- File Uploads
- Pagination
- Analytics Dashboard
- Deployment on Cloud

---

# 📚 Learning Outcomes

During this project, I gained practical experience in:

- MERN Stack Development
- REST API Design
- JWT Authentication
- Role-Based Authorization
- MongoDB Database Design
- React Component Architecture
- Socket.IO Real-Time Communication
- Git & GitHub Workflow
- Full-Stack Debugging

---

# 👨‍💻 Author

**H Amogh **

Full Stack Developer | MERN Stack Enthusiast

GitHub: https://github.com/amogh429

---

# 📄 License

This project was developed as part of the **Codveda Technologies Full Stack Development Internship** and is intended for educational and portfolio purposes.
