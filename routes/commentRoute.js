const { postComment } = require('../controllers/commentControllers');

const commentRoute = require('express').Router();

commentRoute.post("/:id", postComment)

module.exports = commentRoute;