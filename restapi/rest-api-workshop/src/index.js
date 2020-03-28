let express = require('express')
let app = express ()
let personRoute = require('./routes/person')

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`) //this will respond on console
    // res.send(`${new Date().toString()} => ${req.originalUrl}`) // this will respond on screen
    next()
})
app.use(personRoute)
app.use(express.static(`public`))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))

