# 🔐 Authentication API

A simple and secure authentication system built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT**, and **Cookies**.

This project demonstrates the complete authentication flow, including user registration, login, protected routes, profile retrieval, fetching all users, and logout.

---

## 🚀 Features

* ✅ User Registration
* ✅ User Login
* ✅ Password Hashing with bcrypt
* ✅ JWT (JSON Web Token) Authentication
* ✅ Cookie-based Authentication
* ✅ Protected Profile Route
* ✅ Get All Users
* ✅ User Logout
* ✅ MongoDB Database Integration
* ✅ Express Middleware
* ✅ Error Handling

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt
* cookie-parser

---

## 📁 Project Structure

```text
authentication-project/
│
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── auth.routes.js
│   │
│   ├── middlewares/
│   │   └── middleware.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 🔄 Authentication Flow

```text
Client
   │
   ▼
Register/Login
   │
   ▼
Password Hashing (bcrypt)
   │
   ▼
Store User in MongoDB
   │
   ▼
Generate JWT
   │
   ▼
Store JWT in Cookie
   │
   ▼
Protected Route Request
   │
   ▼
Authentication Middleware
   │
   ▼
Verify JWT
   │
   ▼
Find User
   │
   ▼
Return Response
```

---

## 📌 API Endpoints

### Register User

```
POST /api/auth/register
```

Registers a new user after hashing the password.

---

### Login User

```
POST /api/auth/login
```

Authenticates the user and stores a JWT inside an HTTP cookie.

---

### User Profile

```
GET /api/auth/profile
```

Protected route.

Returns the currently logged-in user's profile after verifying the JWT.

---

### Get All Users

```
GET /api/auth/users
```

Returns all registered users (excluding passwords).

---

### Logout User

```
POST /api/auth/logout
```

Clears the authentication cookie and logs the user out.

---

## 🔒 Security Features

* Passwords are hashed using **bcrypt**
* JWT-based authentication
* Cookie-based session handling
* Protected routes using custom authentication middleware
* Password field excluded from responses

---

## 📚 Concepts Practiced

* Express Routing
* Controllers
* Middleware
* MongoDB CRUD Operations
* Mongoose Models
* JWT Authentication
* Cookie Authentication
* Password Hashing
* Environment Variables
* REST APIs
* Error Handling
* Project Folder Structure

---

## 🎯 Learning Objectives

This project was built to understand:

* Backend architecture
* Authentication flow
* JWT and Cookies
* Middleware execution
* Secure password storage
* Express request lifecycle
* Database interaction with MongoDB

---

## 📈 Future Improvements

* Email Verification
* Password Reset
* Refresh Tokens
* Role-Based Authorization (Admin/User)
* Input Validation
* Rate Limiting
* Account Verification
* Unit & Integration Testing
* API Documentation (Swagger)

---

## 👨‍💻 Author

**Muhammad Tayyab**

Backend Developer (Learning MERN Stack)

This project is part of my journey to becoming a professional MERN Stack Developer by building real-world backend applications from scratch.
