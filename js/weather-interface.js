var Weather = require('./../js/weather.js').weatherModule;


var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var weatherObj = new Weather();

  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    weatherObj.getWeather(city, displayHumidity);
  });
});
