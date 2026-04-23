// const math = require('./math');

// console.log(math.add(3,5));
// console.log(math.sub(3,5));

// file handelling using fs module :

const fs = require('fs');
// const os = require('os');
// console.log(os.cpus().length);

fs.writeFile('hello.txt', 'hello world', (err)=>{
    if (err) throw err;
    console.log('file created');
})

fs.readFile('hello.txt', 'utf-8' ,(err, data)=>{
    if (err) throw err;
    console.log(data);
})

fs.appendFile('hello.txt', '\n welcome to node js,update the file',(err)=>{
    if (err) throw err;
    console.log('file updated');
})

