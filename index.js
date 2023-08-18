const express = require("express");
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");
const mediaRoute = require("./routes/mediaRoute");
const commentRoute = require("./routes/commentRoute");
require("dotenv").config()



// ------------ Middleware----------
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())




//----------- Api calls section

app.use("/media", mediaRoute)
// app.use("/products", productRoute)
// app.use("/orders", orderRoute)
app.use("/comments", commentRoute)


app.get("/", (req, res)=> {
    res.send("Social Media Server Running")
})

app.listen(port, ()=> {
    console.log(`Server error running with, ${port}`)
    connectDB()
})