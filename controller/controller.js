const Book = require('../model/modelBookData.js');
const BuyBook = require('../model/modelSellBook.js');
const ReviewBook = require('../model/modelReviewBook');

exports.create = (req, res) => {
    
    const book = new Book({
        Title: req.body.Title, 
        Synopsis: req.body.Synopsis,
        ISBN10: req.body.ISBN10,
        ISBN30: req.body.ISBN30,
        Language: req.body.Language,
        Publisher: req.body.Publisher,
        Price: req.body.Price,
        Review: req.body.Review,
        Soldamout: 0,
        CurrentAmout: req.body.CurrentAmout
    });

    console.log(JSON.stringify(res.body))
    book.save()
    .then(data => {
        console.log(JSON.stringify(data._id))
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the book."
        });
    });
};

exports.buybook = (req, res) => {
    
    const book = new BuyBook({
        Title: req.body.Title,
        buyAmout: req.body.buyAmout
        
    });

    // Save Note in the database
    book.save()
    .then(data => {
        
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the book."
        });
    });
};

exports.reviewbook = (req, res) => {
    
    const book = new ReviewBook({
        Title: req.body.Title,
        Review: req.body.Review,
        Reviewer: req.body.Reviewer
        
    });

    // Save Note in the database
    book.save()
    .then(data => {
        
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the book."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Book.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book."
        });
    });
};

exports.findSoldbook = (req, res) => {
    BuyBook.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book."
        });
    });
};

exports.findallReviewbook = (req, res) => {
    ReviewBook.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book."
        });
    });
};

exports.findOne = (req, res) => {
    Book.findById(req.params.bookId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.bookId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.bookId
        });
    });
};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    // Find note and update it with the request body
    Book.findByIdAndUpdate(req.params.bookId, {
        Title: req.body.Title, 
        Synopsis: req.body.Synopsis,
        ISBN10: req.body.ISBN10,
        ISBN30: req.body.ISBN30,
        Language: req.body.Language,
        Publisher: req.body.Publisher,
        Price: req.body.Price,
        Review: req.body.Review,
        Soldamout: req.body.Soldamout,
        CurrentAmout: req.body.CurrentAmout
    }, {new: true})
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "book not found with id " + req.params.bookId
            });
        }
        res.send({message: "Book has been update"});
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error updating book with id " + req.params.bookId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "book not found with id " + req.params.bookId
            });
        }
        res.send({message: "Book deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.bookId
        });
    });
};


