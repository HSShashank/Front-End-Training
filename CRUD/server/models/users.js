const mongoose = require('mongoose');
//CREATING THE SCHEMA
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        required: true
    }
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;