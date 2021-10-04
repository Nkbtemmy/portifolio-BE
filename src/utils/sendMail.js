//copy and past this link in your browser : https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4M53SOejDQbPl-7Fim2YAdoGCgroeuzs4SyI7XBKEeyphNErP5YowKaEiwxw1EygZF-UjC91kpE8SWOPska2TrzgsZDFg
//then enable it
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const sendEmail= async (mailOptions)  => {
    //console.log(mailOptions);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user : `${process.env.emailUsername}`,
            pass : `${process.env.emailPassword}`
        }
    });
    const Options = {
        from: `NKUBITO 's Account <nkbtemmy2@gmail.com>`,
        to: `emmanuelnkubito2@gmail.com`,
        subject: mailOptions.subject,
        html: `
            <div style="width:80%;border:1px solid black;margin :auto;border-radius: 23px;padding-left:32px;">
            <div style="text-align:center;padding-top: 23px;color:#808080 ">
                <h1>Message</h1>
                <hr style="width:50%"/>
            </div>
            <div >
                <h2>hello Sir NKUBITO<h2><br>
                <h3 style=" letter-spacing: .07em;font-style: oblique;">
                ${mailOptions.message}
            </h3><br />
                <h2>Your Sincerely</h2>
                <h3>Name:<i> ${mailOptions.name}</i> </h3>
                <h3>Email: <a href="mailto:${mailOptions.email}" target=”_blank” ><i>${mailOptions.email}</i></a>
            </div>
                <footer style="position: fixed;left: 0;bottom: 0;width: 100%;background-color: black;color: white;text-align: center;"><div>All Right Reserved to <a href = "https://imanzi.netlify.app/" target="_blank"  >INKUBITO Y'Imanzi</a> </div></footer>
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




{/* <div style=" display: flex;
  justify-content: center;
  align-items: center; ">
  <div style="border:1px solid black; border-radius:25%;width:50%; margin:35px; box-shadow: 0 4px 8px 0 rgba(50, 0, 30, 0.2), 0 6px 20px 0 rgba(0, 10, 120, 0.19);background:sky-blue">
    <div style="padding:50px">
      <p>Good Mornig Helene</p>
      <p> Mr NKUBITO; He is wishing you happy birthday</p>
      <p>“Happy birthday! I hope all your birthday wishes and dreams come true.”
“A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!”
“ Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!</p>
    </div>
  </div>
 </div> */}