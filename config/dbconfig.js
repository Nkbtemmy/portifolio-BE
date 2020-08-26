//const mongoose = require('mongoose');
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://Blogs:Kunnya229!@cluster0.ol4jc.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}, 
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
module.exports = mongoose;