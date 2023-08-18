const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        require: true,
        unique: true,
    },
    comments: [
        {
          commenterName: {type: String, trim:true},
          commenterImage: {type: String, trim: true},
          comment: {type: String, trim: true},
        },
      ],
    image: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    }
})

const mediaModel = mongoose.model("Media", mediaSchema)

module.exports = mediaModel