let express = require('express')
let router = express.Router()


// router.get('/person', (req, res) => {
//     res.send('You have requested a person')
// })

//Params property on the request object
//localhost:3000/person/thomas
// router.get('/person/:name', (req, res) => {
//     res.send(`You have requested a person ${req.params.name}`)
// })

//QueryString => Query property on the request object
//localhost:3000/person?name=thomas //single query
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`You have requested a person ${req.query.name}`)
    }
    else {
        res.send('You have requested a person')
    }
})
//QueryString => Query property on the request object
//localhost:3000/person?name=thomas&age=20 //double query
// router.get('/person', (req, res) => {
//     if(req.query.name){
//         res.send(`You have requested a person ${req.query.name} ${req.query.age}`)
//     }
//     else {
//         res.send('You have requested a person')
//     }
// })
module.exports = router