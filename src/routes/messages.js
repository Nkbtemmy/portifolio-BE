import express from 'express'
import msgControllers from '../controllers/sendMessage'
import msgValidations from '../validation/msgValidator'


const msg = express.Router();

msg.post('/api/v1/sendMessage',msgValidations.msgValidation,msgControllers.msg);

export default msg;