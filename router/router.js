module.exports = (app) => {
  const controller = require('../controller/controller.js');

  // Create a new Note
  app.post('/addbook', controller.create);

  // Retrieve all Notes
  app.get('/getallbook', controller.findAll);

  // Retrieve a single Note with noteId
  app.get('/findbookbyId/:bookId', controller.findOne);

  // Update a Note with noteId
  app.put('/updatebook/:bookId', controller.update);

  // Delete a Note with noteId
  app.delete('/deletebook/:bookId', controller.delete);
}