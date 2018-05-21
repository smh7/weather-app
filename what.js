const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var whatItSays = () => {
  const content = fs.readFile('./random.txt', function (err, data) {
    var what = data.toString().split(',');
    console.log(what[0]);
    console.log(what[1]);
    
  })
};

module.exports.whatItSays = whatItSays;