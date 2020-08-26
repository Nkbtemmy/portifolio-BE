import express from 'express';
const bodyParser = require('body-parser');
import mongoose from './config/dbconfig';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
mongoose.Promise = global.Promise;
app.get('/', (req, res) => {
    res.json({"message": "Welcome to My Blog Backend. "});
});
require('./routes/blog.routes')(app);
app.use("/api/v1/",require('./routes/user_router'));
 // listen for requests
 const port = process.env.PORT || 2300;
 app.listen(port, () => {
     console.log(`Server is listening on port ${port}....`);
 });