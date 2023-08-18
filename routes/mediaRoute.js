const { postMedia, getAllMedia, getMedia } = require("../controllers/mediaControllers");

const mediaRoute = require("express").Router()

mediaRoute.post("/", postMedia)
mediaRoute.get('/', getAllMedia)
mediaRoute.get("/:id", getMedia)

module.exports = mediaRoute;