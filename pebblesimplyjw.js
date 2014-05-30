console.log('Simply.js demo!');

simply.on('singleClick', function(e) {
  if (e.button === 'down') {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var coords = pos.coords;
      var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
      ajax({ url: weatherUrl, type: 'json' }, function(data) {
        simply.text({ title: data.name, subtitle: data.main.temp }, true);
      });
    });
  }
});

simply.setText({
  title: 'Jonas',
  subtitle: 'Hello World!',
  body: 'Down to get temp',
}, true);
