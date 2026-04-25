# 📝 Notes API (Express.js)

A simple REST API built using **Node.js and Express** to manage notes. This project demonstrates core backend concepts like routing, request handling, and CRUD operations.

---

## 🚀 Features

* Create a new note
* Get all notes
* Update a note’s description
* Delete a note

---

## 📁 Project Structure

```
notes-app/
│
|src\
├── app.js        # Main Express app
|-server.js   #this is a module file for creating a server 
├── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
cd 04_task_notes-app

```

2. Install dependencies:

```bash
npm init -y
```
  
```bash
npm install
```

3. Run the server:

```bash
node server.js
```

---

## 🧠 API Endpoints

### ➕ Create Note

**POST /notes**

```json
{
  "title": "Learn Node",
  "description": "Practice daily"
}
```

---

### 📖 Get All Notes

**GET /notes**

Response:

```json
{
  "message": "notes retrieved successfully!",
  "data": [...]
}
```

---

### ❌ Delete Note

**DELETE /notes/:index**

Example:

```
DELETE /notes/0
```

---

### ✏️ Update Note Description

**PATCH /notes/:index**

```json
{
  "description": "Updated description"
}
```

---

## 🧠 How It Works

* Notes are stored in an **in-memory array**
* Each request is handled using Express routes
* `req.body` is used to receive data
* `req.params` is used to identify specific notes

---

## ⚠️ Limitations

* Data is stored in memory (array), so:

  * Data will be lost when server restarts ❌
* No validation or error handling yet
* Uses index instead of unique ID

---

## 🔥 Next Improvements (VERY IMPORTANT)

* ✅ Add MongoDB database
* ✅ Replace array with database storage
* ✅ Use unique IDs instead of index
* ✅ Add validation (title, description required)
* ✅ Add error handling
* ✅ Separate code into:

  * routes
  * controllers
  * models

---

## 🎯 Learning Outcome

This project helps me to understand:

* REST API structure
* HTTP methods (GET, POST, PATCH, DELETE)
* Express routing
* Request/response lifecycle
* `req.body`, `req.params`

---

## 🚀 Next Step

👉 In the next version, we will:

* Connect MongoDB
* Store notes permanently
* Build a real-world backend system

---

💡 *This project is part of my journey to becoming a MERN Stack Developer.*
