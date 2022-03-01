import express from 'express'
import msgControllers from '../controllers/sendMessage'
// import msgValidations from '../validation/msgValidator'


const msg = express.Router();

msg.post('/api/v1/sendMessage',msgControllers.msg);
msg.get('/api/v1/getMessages',msgControllers.getMsgs)
export default msg;