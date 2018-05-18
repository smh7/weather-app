console.log('starting liri')

const dotenv = require("dotenv").config();
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const keys = require('./keys');
// const spotify = require('./spotify.js');
const omdb = require('./omdb.js');
const twitter = require('./twitter.js');
const what = require('./what.js');
const geocode = require('./geocode/geocode.js');

// line 32 is working, seeking to get the rest working now

const titleOptions = {
  describe: 'title-of-song',
  demand: true,
  alias: 't'
};
const artistOptions = {
  describe: 'by-Artist',
  demand: true,
  alias: 'by'
};
const movieTitle = {
  describe: 'title-of-movie',
  demand: true,
  alias: 'm'
}
const argv = yargs
  .command('spotify', 'play a by specifying song and/or artist', {
    title: titleOptions,
    artist: artistOptions
  })
  .command('my-tweets', 'List a set of my recent')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('movie-this', 'Input Movie Name to get Info', {
    movie: movieTitle
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
  case "spotify":
    console.log('spotify', argv.title, argv.artist);
    break;
  case "movie-this":
    console.log('omdb', argv.movie);
    omdb.omdbRequestInfo(argv.movie);
    break;
  case "do-what":
    console.log('do-what');
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

