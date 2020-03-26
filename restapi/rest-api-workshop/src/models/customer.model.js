let mongoose = require('mongoose')

const server = ''
const database = ''
const user = ''
const password = ''

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})


module.exprts = mongoose.model('Customer', CustomerSchema)