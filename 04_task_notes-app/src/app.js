const express = require('express');
const app = express();

app.use(express.json());

const notes = []; // This will hold our notes in memory

app.post('/notes',(req,res)=>{
    notes.push(req.body); // Add the new note to array

    res.status(201).json({ message: "note created successfully!", data: req.body });
});

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message: "notes retrieved successfully!",
        data: notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const noteIndex = req.params.index; 
    delete notes[noteIndex];
    res.status(200).json({message: `note with index ${noteIndex} deleted successfully!`});
});

//update the description of the note 
app.patch('/notes/:index',(req,res)=>{
    const noteIndex = req.params.index;
    const newDescription = req.body.description;
    notes[noteIndex].description = newDescription;
    res.status(200).json({message: `note with index ${noteIndex} updates successfully!`, data: notes[noteIndex]});
})

module.exports = app;