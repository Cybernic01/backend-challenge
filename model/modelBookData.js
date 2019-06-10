const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    Title: String,
    Synopsis: String,
    ISBN10: String,
    ISBN30: String,
    Language: String,
    Publisher: String,
    Price: String,
    Review: String,
    Soldamout: Number,
    CurrentAmout: Number,
});

module.exports = mongoose.model('Book', BookSchema);
