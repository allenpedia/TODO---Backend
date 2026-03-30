const express = require("express")
const noteModel = require("./models/note.model");



const app = express()
app.use(express.json());
//Post - {title , description}

app.post("/notes" , async(req , res)=>{
    const data = req.body;
    await noteModel.create({
        title : data.title,
        message : data.message
    })

    res.status(201).json({
        message : "Data Added Successfully"
    })
})

app.get("/notes", async (req , res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message : "Fetched Successfully",
        notes : notes
    })
})


module.exports = app;

