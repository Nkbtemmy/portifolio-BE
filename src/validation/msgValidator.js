import Joi from 'joi'

export default class msgValidations {
    static msgValidation(req,res,next){
        const schema =  Joi.object().keys({
            name: Joi.string().min(3).max(20).required(),
            email: Joi.string().email().required(),
            subject: Joi.string().min(5).required(),
            message:Joi.string().min(10).required(),
        })
        const { error } = schema.validate(req.body);
            if (error) {
                return res.status(400).json({
                status: 400,
                message: error.details[0].message.replace(/"/g, ''),
                });
            }
        next();
    };

}