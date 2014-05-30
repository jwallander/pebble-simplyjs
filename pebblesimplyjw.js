console.log('Simply.js demo!');

simply.on('singleClick', function(e) {
  if (e.button === 'down') {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var coords = pos.coords;
      var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
      ajax({ url: weatherUrl, type: 'json' }, function(data) {
        simply.text({ title: data.name, subtitle: data.main.temp });
    });
  }
});

simply.setText({
  title: 'Jonas',
  body: 'Hello World!',
}, true);
