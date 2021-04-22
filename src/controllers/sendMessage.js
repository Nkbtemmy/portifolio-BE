import emails from "../utils/sendMail";
import Messages from '../database/models/messages';


class msgControllers{
    static async msg(req,res){
        const msg = {
            name:req.body.name,
            email:req.body.email,
            subject: req.body.subject,
            message: req.body.message
        }
        try{
            const saveMessage = await Messages.create(msg)
            
            const options = {
                name: `${msg.name}`,
                email: `${msg.email}`,
                subject: `${msg.subject}`,
                message: `${msg.message}`
            };
            await emails(options);
            res.status(200).json({
                saveMessage,
                message:"Saved successfull"
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





