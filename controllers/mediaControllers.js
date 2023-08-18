const Media = require("../models/mediaModel");

// Post media

exports.postMedia = async (req, res) =>{
    try {
        console.log(req.body)
        const media = await Media.create(req.body);
        
        return res.status(200).json({
            message: "Created new media", media
        })
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}
// Get Media

exports.getMedia = async (req, res) =>{
    const id = req.params.id;
    console.log(id)
    try {

        const media = await Media.findById(id)
        return res.status(200).json(media)
    } catch (error) {
        return res.status(401).json({message: error.message})
    }   
}


// get All Media
exports.getAllMedia = async (req, res) =>{
    try { 
        const media = await Media.find()

        return res.status(200).json({
            message: "Get all media", media
        })
    } catch (error) {
        return  res.status(401).json({message: error.message})
    }
}