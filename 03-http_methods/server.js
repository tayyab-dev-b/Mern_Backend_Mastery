const app = require('./src/app');
// const port = 3000;

app.get('/users',(req,res)=>{
    res.json({ name: 'tayyab',age: 23});
});

app.post('/users', (req, res) => {
    const newUser = req.body; // The data sent from React
    res.status(201).json({ message: "User created successfully!", data: newUser });
});

app.delete('/users/:id',(req,res)=>{
    const userId = req.params.id;
    res.json({message: `User with id ${userId} deleted successfully!`});
    }); 


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})