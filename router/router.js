module.exports = (app) => {
  const controller = require('../controller/controller.js');

  
  app.post('/addbook', controller.create);

  
  app.get('/getallbook', controller.findAll);

  app.get('/getSolebook', controller.findSoldbook);
  app.get('/getallReviewbook', controller.findallReviewbook);

  app.get('/books/:bookId', controller.findOne);
  

  
  app.put('/updatebook/:bookId', controller.update);

  
  app.delete('/deletebook/:bookId', controller.delete);


  app.post('/buybook', controller.buybook);

  app.post('/reviewbook', controller.reviewbook);
}