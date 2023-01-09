var CronJob = require('cron').CronJob;
import birtdayWish from './birthdayWish';

const job = () =>{ new CronJob('0 18 * * *', function() {
    console.log("its tie m now");
    birtdayWish();
    
    /*
    * Runs every day
    * at 00:00:00 AM. 
    */
    // DO SOMETHING
    }, function () {
      console.log("Now server stoped");
      /* This function is executed when the job stops */
    },
    true /* Start the job right now */
  )
};
export default job;

