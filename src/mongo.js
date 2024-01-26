const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://pralaptop36:9TuWSEvOXxJ9Z2be@cluster0.hr1krpf.mongodb.net/test")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('failed');
    })

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const LogInCollection = new mongoose.model('LogInCollection', logInSchema)

module.exports = LogInCollection