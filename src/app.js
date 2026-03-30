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

app.get("/notes/findOne" , async (req , res) =>{
    let title = req.body.title;
    const notes = await noteModel.findOne({
        title : title
    })
    if(notes === null){
        res.status(404).json({
            message : "Re check"
        })
        return;
    }
    res.status(200).json({
        message : "find Successfully",
        notes : notes
    })
})


app.delete("/notes/:id", async (req , res) =>{
    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message : "Task Successfull"
    })
})

app.patch("/notes/:id" , async(req , res) =>{
    const id = req.params.id;
    const desc = req.body.desc;
    await noteModel.findOneAndUpdate({
        _id : id
    },{
        message : desc
    })

    res.status(200).json({
        message : "Task Successfull"
    })
})

module.exports = app;

