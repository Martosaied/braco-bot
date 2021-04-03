const cronJob = require('cron').CronJob;
const T = require("./Twit.js");

const AutoTwit = () => {
    const stream = T.stream('user')
    const tweetEvent = (tuit) => {      
      T.post("statuses/update", { 
        status: `${tuit.user.screen_name} jajaja`, 
        in_reply_to_status_id:  tuit.id
      })
      .catch(err => {
        console.error("error", err.stack);
      })
      .then(result => {
        console.log(`Tweet uploaded successfully`);
      });
    } 
    stream.on('tweet', tweetEvent)
};

module.exports = AutoTwit;