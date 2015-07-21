
function doCall(city) {
  return new RSVP.Promise(function(resolve, reject) {
    $.ajax({
      type : "POST",
      dataType : "jsonp",
      url : "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric",
      async : false
    }).done(function(data) {
      resolve(data);
    }).fail(function(e) {
      reject(e);
    })
  });  
}

var promises = {
  london: doCall('London,uk'),
  torino: doCall('Torino,it'), 
  barcelona: doCall('Barcelona,es'),
  noCity: doCall('abc,def') 
};

RSVP.hash(promises).then(function(results) {
  console.log(results.london.name, ': ', results.london.main.temp, ' - ', results.london.weather[0].description);
  console.log(results.torino.name, ': ', results.torino.main.temp, ' - ', results.torino.weather[0].description);
  console.log(results.barcelona.name, ': ', results.barcelona.main.temp, ' - ', results.barcelona.weather[0].description);
});
