const axios = require('axios');

//  const birtdayWhish = (req,res) =>{
 const dateOfDay = new Date();
 const today = dateOfDay.getDay();
 const thisMonth = dateOfDay.getMonth();
 axios.get("https://voicetoworld.herokuapp.com/api/v1/users/classmates")
//  .then(res=>JSON.parse(res))
 .then((resp)=>{
     let arr = resp.data.result;
     arr.map((data)=>{
         //console.log("--",data)
         let birthdate = new Date(data.birthdate);
         let bornMonth = birthdate.getMonth();
         let birthday = birthdate.getDay();

         if(bornMonth == thisMonth && birthday == today){
             console.log("happy birthday ")
         }
         console.log("no one have bd today")
     })
 // console.log(resp.data.result)
 }).catch((error)=>{
     console.log(error)
    //  res.status(500).send({
    //      message:"error happen from backend",
    //      errorMessage:error.msg
    //  })
 })
//}