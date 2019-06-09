const Book = require('../model/model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }

    // CNew Book
    const note = new Book({
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
    });

    // Save Note in the database
    note.save()
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
