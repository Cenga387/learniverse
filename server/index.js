const express = require('express')
const passport = require('passport')

const app = express()

app.get("/api", (req, res) => {
    res.json({})
})

app.listen(8000, () => {console.log("Server started on port 8000")})