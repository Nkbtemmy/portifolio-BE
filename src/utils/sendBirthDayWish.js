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
  // console.log("mailOption:", mailOptions)
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
    to: `${mailOptions.Email}`,
    subject: "birthday Wish",
    html: ` <html>
    <head>
      <style>
        /* Add your own styling here */
      </style>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
      <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ccc; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #fff; text-align: center; padding: 20px; background-color: #64442e; margin: 0;">Birthday wish Message</h1>
        <div class="message" style="background-color: #edeae7; padding: 20px; margin-bottom: 0px;">
          <div>
            <div style=" display: flex;
  justify-content: center;
  align-items: center; ">
  <div >
  
  </div>
</div>
            <div>
                      <p><b>${time}</b> ${mailOptions.Surname} ${mailOptions.FirstName}</p>
      <p> <b>Mr. E. NKUBITO;</b> is wishing you happy birthday !!!</p>
            </div>
                  <div class="card-title">Happy Birthday, dear friend!</div>
    <div class="card-text">May this special day be filled with love, laughter, and all the things that bring you joy. You are an amazing person and I am so grateful to have you in my life. Wishing you the very best on your birthday and always.<br /><br />
      i wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always.<br /> <br />
      <i>Wishing you a very happy and fun-filled birthday!”</i>
      </p>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>`
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


