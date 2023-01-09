const axios = require('axios');
import sendEmail from '../utils/sendBirthDayWish';
import classmate from './files/mates.json'
const birtdayWish = (req,res) =>{
    const dateOfDay = new Date();
    const today = dateOfDay.getDate();
    const thisMonth = dateOfDay.getMonth();
     let userData = []
     classmate.map((data)=>{
        let birthdate = new Date(data.Birthdate);
        let bornMonth = birthdate.getMonth();
        let birthday = birthdate.getDate();
        if(bornMonth == thisMonth && birthday == today){
            userData.push(data)
            console.log(`today is ${data.FirstName}  birthday`)
            sendEmail(data);
        }
    })
    if (userData.length === 0) console.log("no one have bd today")
    // axios.get("https://voicetoworld.herokuapp.com/api/v1/users/classmates")
    // .then((resp)=>{

    //     let arr = resp.data.result;
    //     // console.log(arr)
    //     //   sendEmail(data);
    //      //if (arr.length === 0) console.log("no one have bd today")
    //      let userData = []
    //      arr.map((data)=>{
    //         let birthdate = new Date(data.birthdate);
    //         let bornMonth = birthdate.getMonth();
    //         let birthday = birthdate.getDate();
    //         //console.log("bd:",birthday,"bm:",bornMonth)
    //         if(bornMonth == thisMonth && birthday == today){
    //             userData.push(data)
    //             console.log(`today is ${data.firstname}  birthday`)
    //             // console.log(data)
    //             sendEmail(data);
    //         }
    //         //console.log("no one have bd today")
    //     })
    //     if (userData.length === 0) console.log("no one have bd today")
    // // console.log(resp.data.result)
    // }).catch((error)=>{
    //     console.log(error.message)
    //     //  res.send({
    //     //      message:"error happen from backend",
    //     //      errorMessage:error.message
    //     //  })
    // })
}
export default birtdayWish;
