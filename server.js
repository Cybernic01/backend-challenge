const express = require('express');
const bodyParser = require('body-parser');
 const morgan = require('morgan');



const app = express();
const port = process.env.PORT || 3000;





app.use(morgan('dev', {
    
 }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api/v1', require('./router'));

app.use((req, res, next) => {
    res.status(404);
    res.json({
        status: 404,
        message: "Resource not found"
    });
    next();
});

app.listen(port);
console.log(`Server started on ${port}`);