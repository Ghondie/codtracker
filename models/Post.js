const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
});

module.exports = mongoose.model('Posts', PostSchema);




// AYYY This is the server i set up DB_CONNECTION=mongodb+srv://Jared:1ghondie@cluster0.plx7p.mongodb.net/COD-TRACKER?retryWrites=true&w=majority 