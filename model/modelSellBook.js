const mongoose = require('mongoose');

const BuyBookSchema = mongoose.Schema({
    Title: String,
    buyAmout: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('buyBook', BuyBookSchema);
