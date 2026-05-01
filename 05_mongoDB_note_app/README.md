# 📝 Notes API (MongoDB + Express)

A simple and clean REST API built using **Node.js, Express, and MongoDB** to manage notes.
This project demonstrates real-world backend concepts including **CRUD operations, database integration, and API design**.

---

## 🚀 Features

* ➕ Create a new note
* 📖 Get all notes
* ✏️ Update a note (partial update using PATCH)
* ❌ Delete a note
* 💾 Persistent storage using MongoDB

---

## 🧠 Tech Stack

* **Node.js** – runtime environment
* **Express.js** – backend framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for MongoDB

---

## 📁 Project Structure

```id="sk7q1y"
project/
│
├── models/
│   └── noteModel.js
│
├── app.js
├── server.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash id="q5t0pg"
git clone <your-repo-url>
cd project
```

---

### 2. Install Dependencies

```bash id="r9q7zx"
npm install
```

---

### 3. Setup MongoDB Connection

In your code:

```js id="v9fsbh"
mongoose.connect("your-mongodb-connection-string")
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));
```

---

### 4. Run Server

```bash id="r9p9vw"
node server.js
```

---

## 🔥 API Endpoints

### ➕ Create Note

**POST /notes**

```json id="g3m8bx"
{
  "title": "Learn Backend",
  "description": "Practice Node and MongoDB"
}
```

---

### 📖 Get All Notes

**GET /notes**

---

### ✏️ Update Note

**PATCH /notes/:id**

```json id="5z2e1k"
{
  "description": "Updated description"
}
```

---

### ❌ Delete Note

**DELETE /notes/:id**

---

## 🧠 How It Works

```text id="r4q6mp"
Client (Thunder Client / React)
        ↓
HTTP Request (GET, POST, PATCH, DELETE)
        ↓
Express Server
        ↓
Mongoose Model
        ↓
MongoDB Database
        ↓
Response sent back to client
```

---

## 🔑 Key Concepts Used

* REST API design
* Route parameters (`req.params`)
* Request body (`req.body`)
* CRUD operations
* MongoDB collections & documents
* Mongoose Schema & Model

---

## ⚠️ Error Handling

* Handles server errors with try-catch
* Returns appropriate HTTP status codes

---

## 🔥 Future Improvements

* ✅ Add validation (required fields)
* ✅ Add authentication (JWT)
* ✅ Add user-based notes
* ✅ Add pagination & search (query params)
* ✅ Separate controllers and routes

---

## 🎯 Learning Outcome

This project helps you understand:

* How backend communicates with frontend
* How data flows through an API
* How to store and manage data in MongoDB
* How to structure a real-world backend project

---

## 🚀 Conclusion

This Notes API is a strong foundation for building **real-world MERN applications**.
It demonstrates how to design APIs, manage data, and connect backend with a database.

---

💡 *Next Step: Connect this backend with React frontend to build a full MERN Notes App.*
