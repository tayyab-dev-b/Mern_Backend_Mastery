const app = require('./src/app');
const dotenv = require('dotenv').config();
const connectDB = require('./src/db/db');
const port = process.env.PORT || 5000;

connectDB();

app.listen(port,()=>{
    console.log('Server is running on port',port);
})