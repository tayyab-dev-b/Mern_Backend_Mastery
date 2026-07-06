# 🔐 Authentication Backend Practice

A beginner-friendly backend authentication project built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. This project is designed to help understand the core concepts of authentication, project architecture, and API development before building complete authentication systems.

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Cookie Parser
* dotenv

## 📚 Topics Covered

* Backend project structure
* Authentication fundamentals
* JWT token generation
* Cookies
* Route prefixes
* Express routing
* Controllers
* MongoDB integration
* Environment variables
* Basic API development
* Request and response handling

## 📁 Project Structure

```text
authentication/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── db/
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

## 📌 Current Features

* User Registration API
* MongoDB Database Connection
* User Model
* Authentication Route
* JWT Token Generation
* Cookie Creation
* Environment Variable Configuration
* Modular Folder Structure

## 📡 API Endpoints

### Register User

```http
POST /auth/register
```

### Request Body

```json
{
  "username": "tayyab",
  "email": "tayyab@example.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "message": "User Registered Successfully",
  "user": {
    "_id": "...",
    "username": "tayyab",
    "email": "tayyab@example.com"
  }
}
```

## 🎯 Learning Objectives

This project focuses on understanding:

* How authentication works
* How Express routes are organized
* Why route prefixes are used
* How request and response objects work
* How users are stored in MongoDB
* How JWT tokens are generated
* How cookies are sent from the server to the client
* How backend APIs communicate with frontend applications

## 🛠️ Future Improvements

* Password hashing with bcrypt
* Login API
* JWT verification
* Authentication middleware
* Protected routes
* Logout API
* Authorization
* Refresh tokens
* Role-based access control

## 📖 Purpose

This repository is part of my backend learning journey. The goal is to build a strong understanding of authentication concepts step by step before developing production-ready authentication systems.

---

**Author:** Muhammad Tayyab
**Learning Stack:** Node.js • Express.js • MongoDB • JWT
