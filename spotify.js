const request = require('request');
const keys = require('./keys');
const yargs = require('yargs');
const Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

// need to URL encode the search terms, I'm assuming?
 
spotify.search({ type: 'artist', query: 'jim%20infantino' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data, undefined, 2)); 
});