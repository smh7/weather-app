const geocode = require('./geocode');
const fs = require('fs');


  
// })

it('should geocode address', (done) => {
var results = geocode.geocodeAddress('175 Parrott Ave, Portsmouth, NH 03801');
 console.log('made it here')
 var testData = fs.readFile('./geocode/geocodetest.txt', 'utf8', function(err, data){
  if(err){
    console.log(err)
  }
  var geoForCompare = JSON.parse(data);
  console.log(geoForCompare.lattitude);
  console.log(geoForCompare.longitude);

})
 done();

  if (testData !== geoForCompare) {
    throw new Error(`Expected lat = 43.07 and long -70 but got ${data}`)
  }
});


// it('should return true', () => {
//   var res = true;
//   var taco =  geocode.geocodeAddress("175 Parrott Ave, Portsmouth, NH 03801");
//   console.log(taco);

//   if(res === false) {
//     throw new Error(`Expected but got`);
//   }
// })