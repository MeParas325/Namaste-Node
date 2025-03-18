const express = require('express')

const app = express()

// it will handle all the routes because you haven't provided it any specific route
// app.use((req, res) => {
//     res.send("Hello world")
// })

app.use("/", (req, res) => {
    res.send("home")
})

app.use("/test", (req, res) => {
    res.send("Hello world")
})

app.use("/hello", (req, res) => {
    res.send("Hello world 2")
})

app.listen(3000, () => {
    console.log("Server is listening at 3000 port.")
})