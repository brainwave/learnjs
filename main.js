const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
app.listen((process.env.PORT || 3000), () => console.log("App listening on port 3000"))

app.get("/", (req, res) => {
    console.log(req)
    res.sendFile(path.resolve(__dirname,'index.html'))
})