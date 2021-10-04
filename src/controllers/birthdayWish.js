const axios = require('axios');
import sendEmail from '../utils/sendBirthDayWish';
const birtdayWish = (req,res) =>{
    const dateOfDay = new Date();
    const today = dateOfDay.getDate();
    const thisMonth = dateOfDay.getMonth();
    axios.get("https://voicetoworld.herokuapp.com/api/v1/users/classmates")
    .then((resp)=>{
        let arr = resp.data.result;
          sendEmail(data);
         arr.map((data)=>{
            let birthdate = new Date(data.birthdate);
            let bornMonth = birthdate.getMonth();
            let birthday = birthdate.getDate();
            
            if(bornMonth == thisMonth && birthday == today){
                //console.log("happy birthday: ")
                sendEmail(data);
            }
           // console.log("no one have bd today")
        })
    // console.log(resp.data.result)
    }).catch((error)=>{
        console.log(error.message)
        //  res.status(500).send({
        //      message:"error happen from backend",
        //      errorMessage:error.message
        //  })
    })
}
export default birtdayWish;
