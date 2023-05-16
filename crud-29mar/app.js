const mongoose = require('mongoose');

// connection creation and creation in a new db
mongoose.connect("mongodb://localhost:27017/newdb")
.then(()=> console.log("connection successfull..."))
.catch((error)=> console.log(error));

const myPlaylist = new mongoose.Schema({
    name: {
        name: String,
    },
    ctype:String,
    videos:Number,
    author:String,
    active: Boolean,
    date:{
        type:Date,
        default: Date.now
    }
});

// Model - it is a class 
//Collection creation
const Playlist = new mongoose.model("Playlist",myPlaylist )   //Models is a class so write it in Caps.


//Create document or insert
const createDocument = async ()=>{
    try {
        const reactPlaylist = new Playlist({
            name: "Node Js",
            ctype:"Back End",
            videos:40,
            author:"Aastha",
            active: true
        })

        const jsPlaylist = new Playlist({
            name: "Javascript",
            ctype:"Front End",
            videos:40,
            author:"Aastha",
            active: true
        })

        const mongoosePlaylist = new Playlist({
            name: "Mongoose JS",
            ctype:"Front End",
            videos:40,
            author:"Aastha",
            active: true
        })

        const expressPlaylist = new Playlist({
            name: "express JS",
            ctype:"Front End",
            videos:40,
            author:"Aastha",
            active: true
        })
    
    const result = await reactPlaylist.save();   // it's return a promise, ki kam hua ya nhi and it takes time so we take it as async-await
    console.log(result);
    } catch (error) {
        console.log(error);
    }
    
};

createDocument();