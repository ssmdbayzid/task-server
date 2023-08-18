const Media = require("../models/mediaModel")

exports.postComment = async (req, res)=>{
    
    try {
    const id = req.params.id
        const comments = req.body;
    console.log(comments)

    const { commenterName, commenterImage, comment } = req.body;

    const existingItem = await Media.findById(id)
    
    if(!existingItem){
        return res.status(404).json({message: "Item not found"})
    }

    //  Add new Comment

    existingItem.comments.push({
        commenterName,
        commenterImage,
        comment
    })
    console.log(existingItem)
        
    await existingItem.save()

    return res.status(200).json({message: "this is from post comment", existingItem})
} catch (error) {
    return res.status(401).json({message: error.message})
}
}