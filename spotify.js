const request = require('request');
const keys = require('./keys');
const yargs = require('yargs');
const Spotify = require('node-spotify-api');
 
var spotifySong = (songTitle) => {
  var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
  
  // need to URL encode the search terms, I'm assuming?
   
  spotify.search({ type: 'track', query: songTitle, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log('Song:', songTitle);
  console.log('Artist(s):');
   for(i = 0; i < data.tracks.items[0].artists.length; i++){
     console.log(data.tracks.items[0].artists[i].name)
   }
  
   console.log('From the album:', data.tracks.items[0].album.name);
   console.log('Spotify Preview:', data.tracks.items[0].album.external_urls.spotify);
  });
}
module.exports.spotifySong = spotifySong;