const express = require("express");
const noteModel = require("./models/model");
const app = express();

const connectDB = require("./db/db");

connectDB();

app.use(express.json());

app.post("/notes", async (req, res) => {
  try {
    const data = req.body;
    await noteModel.create({
      title: data.title,
      description: data.description,
    });
    res.status(201).json({
      message: "note created successfully",
    });
  } catch (error) {
    console.error("error creating note", error);
    res.status(500).json({
      message: "error creating note",
    });
  }
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    // findOne method will return the first document that matches the query criteria, while find method will return on array of all document that matches the query criteria
    // const notes = await noteModel.findOne({
    //     title:'first req'
    // })
    res.status(200).json({
      message: "notes retrieved successfully",
      data: notes,
    });
  } catch (error) {
    console.error("error retrieving notes", error);
    res.status(500).json({
      message: "error retrieving notes",
    });
  }
});

app.delete("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await noteModel.findOneAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: "note deleted successfully",
    });
  } catch (error) {
    console.error("error deleting note", error);
    res.status(500).json({
      message: "error deleting note",
    });
  }
});

app.patch('/notes/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const description = req.body.description;
        await noteModel.findOneAndUpdate({
            _id:id
        },{
            description:description
        })
        res.status(200).json({
            message:'note updated successfully'
        })
    }catch(error){
        console.error('error updating note',error);
    }
})


module.exports = app;
