console.log('starting liri')

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

// line 32 is working, seeking to get the rest working now

const titleOptions = {
  describe: 'Title of song',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('spotify', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('tweets', 'List a set of my recent')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

// address line 58 is something I'm playing with not part of assignment

switch(command){
  case "my-tweets":
    console.log('tweetsville');
    break;
  case "spotify-this-song":
    console.log('spotify');
    break;
  case "movie-this":
    console.log('omdb');
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

