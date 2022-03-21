import emails from "../utils/sendMail";
import Messages from '../database/models/messages';


class msgControllers{
    static async getMsgs(req,res){
        try {
            await Messages.find().then((resp)=>{
                res.status(201).json({
                    Message:"data receved",
                    data:resp
                })
            }).catch((err)=>{
                res.status(501).json({
                    Message:"Error happen",
                    error:err.message
                })
            })
        } catch (error) {
            res.status(500).json({
                Message:"Error happen",
                error:error.message
            })  
        }
    }

    static async msg(req,res){
    
        let today = new Date();

       

        const msg = {
            name:req.body.name,
            email:req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            dateOfBirth: req.body.dob,
        }

        try{
            const saveMessage = await Messages.create(msg)
            
            const options = {
                name: `${msg.name}`,
                email: `${msg.email}`,
                subject: `${msg.subject}`,
                message: `${msg.message}`
            };
           await emails(options).then((data)=>{
               console.log(data)
                res.status(200).json({
                    saveMessage,
                    message:"Saved successfull"
                })
           }).catch((err)=>{
               return res.send({
                   status:403,
                   message:err.message,
                   err
               })
           })
            
        }catch(error){
            console.log(error),
            res.status(500).send({ 
                error: "Failed to be saved"
            });
        } 
    }

}
export default msgControllers;





