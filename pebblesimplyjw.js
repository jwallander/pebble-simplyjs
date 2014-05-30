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
  if ( e.button === 'up') {
    var batteryChargeState = Pebble.battery_state_service_peek();
    var charging = (batteryChargeState.is_charging === true ? ' and Charging' : '');
    var plugged = (batteryChargeState.is_plugged === true ? 'Plugged in' : 'Unplugged');
    Simply.setText({title: 'Battery', subtitle: batteryChargeState.charge_percent, body: plugged + charging})
  }
});

simply.setText({
  title: 'Jonas',
  subtitle: 'Hello World!',
  body: 'Down gets temp, up gets battery',
}, true);
