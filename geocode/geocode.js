const request = require('request');
const keys = require('../keys');
const yargs = require('yargs');

// Encoding the string we'll use for the URL


var geocodeAddress =  (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
 
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keys.googlemaps.apikey}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('unable to connect to Google servers.');  
    
  } else if(body.status ==='ZERO_RESULTS') {
      callback('unable to find that address.');  
      
  } else if (body.status === 'OK' ) {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lattitude:body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
  }
})
};

module.exports.geocodeAddress = geocodeAddress;