const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://backend-m:u0W8bPDJSqBUjokm@backend-mastery.sltpbwy.mongodb.net/first-db')
        console.log('connected to mongodb');
    }catch(error){
        console.error('error connecting to mongodb',error);
    }
}

module.exports = connectDB;