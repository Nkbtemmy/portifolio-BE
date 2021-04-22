import mongoose from 'mongoose'
const messageSchema = mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    email: String,
    subject: String,
    message: String
   // date: { type: Date, default: Date.now },
}, {
    timestamps: true
});

module.exports = mongoose.model('Messages', messageSchema);