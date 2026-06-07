require('dotenv').config();
const server = require('./src/app');
const connectDb = require('./src/db/db');


connectDb();

const port =3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});