import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

var today = new Date()
var curHr = today.getHours()
var time = null;

if (curHr < 12) {
  var time = "Morning";
} else if (curHr < 18) {
  var time = "Afternoon";
} else {
  var time = "Evening";
}


const sendEmail = (mailOptions) => {
  console.log("mailOption:", mailOptions)
  const transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_SERVICE,
    port: 465,
    auth: {
      user: process.env.SERVICE_USERNAME,
      pass: process.env.SERVICE_PASSWORD,
    },
    secure: true,
    logger: false,
    debug: true,
  });
  const Options = {
    from: `NKUBITO's System <${process.env.SERVICE_USERNAME}>`,
    to: `${mailOptions.email}`,
    subject: "birthday Wish",
    html: `<div style=" display: flex;
    justify-content: center;
    align-items: center; ">
    <div style="margin:auto; border:1px solid black; background:white; border-radius:25%;width:80%; ; box-shadow: 0 4px 8px 0 rgba(50, 0, 30, 0.2), 0 6px 20px 0 rgba(0, 10, 120, 0.19);background:sky-blue">
      <div style="padding:5%">
        <p>${time} ${mailOptions.surname} ${mailOptions.firstname}</p>
        <p> <b>Mr NKUBITO;</b> He is wishing you happy birthday</p>
        <p><i>“Happy birthday! I hope all your birthday wishes and dreams come true.and i wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Wishing you a very happy and fun-filled birthday!”</i></p>
      </div>
    </div>
  </div>`
  };
  // try {
  //   return transporter.sendMail(Options)
  // } catch (error) {
  //   console.log("Sending email error:",error.message);
  // }
  return transporter.sendMail(Options, error => {
    if (error) {
      console.log("Sending email error:",error.message);
    }
    else{
      console.log("email sent successfully")
    }
  });
  // return transporter.sendMail(Options, error => {
  //   if (error) {
  //     console.log(error.message);
  //   }
  // });
};

export default sendEmail;


