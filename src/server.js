import express from 'express';
import cors from 'cors'
import job from './controllers/schedule';
import msg from './routes/messages'
//import mongoose from './database/config/dbconfig';
const app = express();
app.use(cors());
job();
//app.use(express.urlencoded({ extended: true,useUnifiedTopology: true  }))
app.use(express.json())
//mongoose.Promise = global.Promise;
app.get('/', (req, res) => {
    // var ip = req.header('x-forwarded-for') ||  req.ip;
    // console.log("ip address: ", ip)
    res.json({"message": "Welcome to My Blog Backend. "});
});
// var allowCrossDomain = function(req, res, next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// };
// app.use(allowCrossDomain);
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

const port = process.env.PORT || 8082;
 app.listen(port, () => {
     console.log(`Server is listening on port ${port}....`);
 });

