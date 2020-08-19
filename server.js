// Configuring the database
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(' mongodb://127.0.0.1:27017/test', {useNewUrlParser: true}
).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to My Blog Backend. "});
});
require('./routes/blog.routes.js')(app);
 // listen for requests
 const port = process.env.PORT || 2300;
 app.listen(port, () => {
     console.log(`Server is listening on port ${port}....`);
 });