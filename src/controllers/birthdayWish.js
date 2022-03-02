const axios = require('axios');
import sendEmail from '../utils/sendBirthDayWish';
const birtdayWish = (req,res) =>{
    const dateOfDay = new Date();
    const today = dateOfDay.getDate();
    const thisMonth = dateOfDay.getMonth();
    axios.get("https://voicetoworld.herokuapp.com/api/v1/users/classmates")
    .then((resp)=>{

        let arr = resp.data.result;
        // console.log(arr)
        //   sendEmail(data);
         arr.map((data)=>{
            let birthdate = new Date(data.birthdate);
            let bornMonth = birthdate.getMonth();
            let birthday = birthdate.getDate();
            //console.log("bd:",birthday,"bm:",bornMonth)
            
            if(bornMonth == thisMonth && birthday == today){
                console.log(`today is ${data.firstname}  birthday`)
                console.log(data)
                sendEmail(data);
            }
            //console.log("no one have bd today")
        })
    // console.log(resp.data.result)
    }).catch((error)=>{
        console.log(error.message)
         res.status(500).send({
             message:"error happen from backend",
             errorMessage:error.message
         })
    })
}
export default birtdayWish;
