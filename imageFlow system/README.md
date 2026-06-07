ImageFlow 🚀

A full-stack MERN application for uploading, storing, and viewing images with captions. ImageFlow provides a simple social-feed style experience where users can create posts by uploading images and view them in a responsive feed.

Features
📸 Upload images with captions
☁️ Cloud image storage integration
🗄️ MongoDB database for post management
⚡ RESTful API built with Express.js
🎨 Modern React frontend
🔄 Full CRUD functionality
📱 Responsive user interface
Tech Stack
Frontend
React.js
React Router
Axios
CSS/Tailwind CSS
Backend
Node.js
Express.js
Multer (file uploads)
Database & Storage
MongoDB Atlas
Mongoose
Cloudinary / Image Storage Service
Project Structure
ImageFlow/
├── Frontend/
├── Backend/
└── README.md
Installation
Backend
cd Backend
npm install
npm start
Frontend
cd Frontend
npm install
npm run dev
Environment Variables

Create a .env file in the backend directory:

MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Future Enhancements
User Authentication & Authorization
Likes and Comments
User Profiles
Search & Filters
AI-powered Image Analysis
Author

Muhammad Tayyab
BS Computer Science
Abdul Wali Khan University Mardan