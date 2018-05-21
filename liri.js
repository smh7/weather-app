// liri
const dotenv = require("dotenv").config();
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const keys = require('./keys');
const spotify = require('./spotify.js');
const omdb = require('./omdb.js');
const twitter = require('./twitter.js');
const what = require('./what.js');
const geocode = require('./geocode/geocode.js');
const weather = require('weather-js');

// line 32 is working, seeking to get the rest working now

const titleOptions = {
  describe: 'title-of-song or track, in quotes please',
  demand: true,
  alias: 't'
};
const movieTitle = {
  describe: 'title-of-movie',
  demand: true,
  alias: 'm'
};
const locationUI = {
  describe: 'location zip or city state or address in quotes if > zip code',
  demand: true,
  alias: 'a'
}
const argv = yargs
  .command('spotify-this-song', 'find additional info re: track', {
    title: titleOptions
  })
  .command('my-tweets', 'List a set of my recent')
  .command('do-what-it-says', 'read text file and execute command')  
  .command('movie-this', 'Input Movie Name to get Info', {
    movie: movieTitle
  })
  .command("address", 'Input location get coordinates', {
    location: locationUI
  })
  .help()
  .argv;
var command = argv._[0];

// address line 58 is something I'm playing with not part of assignment

switch(command){
  case "my-tweets":
    console.log('Your Recent Tweets Are: ');
    twitter.twitterReadMyTweets();
    break;
  case "spotify-this-song":
    spotify.spotifySong(argv.title);
    break;
  case "movie-this":
    console.log('omdb', argv.movie);
    omdb.omdbRequestInfo(argv.movie);
    break;
  case "do-what-it-says":
    console.log('do-what-it-says');
    what.whatItSays();
    break;
  case "address" || "a":
      geocode.geocodeAddress(argv.a, (errorMessage, results) => {
        if(errorMessage){
          console.log(errorMessage);
        } else {
          console.log(JSON.stringify(results, undefined, 2));
        }
      });

    break;
  default:
    console.log('not sure what you wanted');
}

