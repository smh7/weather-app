const request = require('request');
const keys = require('./keys');
const yargs = require('yargs');


// Encoding the string we'll use for the URL
// Update for OMDb API
var movieName = "Deconstructing Harry";
var encodedName = encodeURIComponent(movieName);

var omdbApi = require('omdb-client');
 
var params = {
    apiKey: keys.omdb.omdbkey,
    title: movieName,
    incTomatoes: true
}
omdbApi.get(params, function(err, data) {
    // process response...
    console.log("Title",data.Title);
    console.log("Year",data.Year);
    console.log("IMDB Rating",data.Ratings[0].Value);
    console.log("Rotten Tomatoes",data.Ratings[1].Value);
    console.log("Country", data.Country);
    console.log("Languages", data.Language);
    console.log("Plot", data.Plot);
    console.log("Actors", data.Actors)
});

