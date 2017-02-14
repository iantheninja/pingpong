var apiKey = "74c027d8d2357a7c1dcf2aa875892bde";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })
    .fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
    console.log("Notice: the GET request has already been made");
  });
});