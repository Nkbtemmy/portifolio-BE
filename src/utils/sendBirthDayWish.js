import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const sendEmail= async (mailOptions)  => {
    //console.log(mailOptions);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user : `emmanuelnkubito2@gmail.com`,
          pass : `nkubito229043`
        }
    });
    const Options = {
        from: `NKUBITO 's Account <emmanuelnkubito2@gmail.com>`,
        to: `${mailOptions.email}`,
        subject: "birthday Wish",
        html: `<div style=" display: flex;
        justify-content: center;
        align-items: center; ">
        <div style="margin:auto; border:1px solid black; background:white; border-radius:25%;width:80%; ; box-shadow: 0 4px 8px 0 rgba(50, 0, 30, 0.2), 0 6px 20px 0 rgba(0, 10, 120, 0.19);background:sky-blue">
          <div style="padding:5%">
            <p>Good Mornig ${mailOptions.surname} ${mailOptions.firstname}</p>
            <p> <b>Mr NKUBITO;</b> He is wishing you happy birthday</p>
            <p><i>“Happy birthday! I hope all your birthday wishes and dreams come true.and i wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Wishing you a very happy and fun-filled birthday!”</i></p>
          </div>
        </div>
       </div>`
    }
    await transporter.sendMail(Options, (error) => {
        if (error) {
            console.log("email sent fails",error)
           // return false
        } else {
            console.log("Email sent successfull")
          //  return true
        }
    })
}
export  default sendEmail;
