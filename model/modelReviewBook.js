const mongoose = require('mongoose');

const ReviewBookSchema = mongoose.Schema({
    Title: String,
    Review: String,
    Reviewer: String
}, {
    timestamps: true
});

module.exports = mongoose.model('reviewbook', ReviewBookSchema);