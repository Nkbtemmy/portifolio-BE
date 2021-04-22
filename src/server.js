import express from 'express';
import msg from './routes/messages'
//import mongoose from './database/config/dbconfig';
const app = express();
//app.use(express.urlencoded({ extended: true,useUnifiedTopology: true  }))
app.use(express.json())
//mongoose.Promise = global.Promise;
app.get('/', (req, res) => {
    res.json({"message": "Welcome to My Blog Backend. "});
});
var allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.post("/create", function (req, res) {
    const email = req.body.email;
    res.status(200).json({
      status: 200,
      email,
    });
  });
require('./routes/blog.routes')(app);

app.use("/api/v1/",require('./routes/user_router'));
app.use(msg);

const port = process.env.PORT || 2300;
 app.listen(port, () => {
     console.log(`Server is listening on port ${port}....`);
 });

