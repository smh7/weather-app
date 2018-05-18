const request = require('request');
const keys = require('./keys');

const twitter = require('twitter');
const yargs = require('yargs');

var twitterReadMyTweets = () => {
  let client = new twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret,
  });
  
  
  var params = {screen_name: 'stevenmhoward7'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for(i = 0; i < tweets.length; i++){
      console.log(JSON.stringify(tweets[i].text, undefined, 2));
      }
      
    } else {
      console.log(JSON.stringify(error, undefined, 2));
    }
  });
};

module.exports.twitterReadMyTweets = twitterReadMyTweets;
