const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const port  = 5000
const cors = require("cors")


app.use(express.json());
app.use(bodyParser.json())
app.use(cors())


app.get("/", (req, res)=> {
    res.send("Task Server Running")
})



app.listen(port, ()=>{
    console.log(`task server runnning with ${port}`)
})