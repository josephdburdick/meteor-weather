if (Meteor.isClient){
	Template.layout.helpers({
		currentWeather: function(){
			var city = Session.get('city');

			Meteor.call('getWeather', city, function(error, results){
				Session.set('weather', JSON.parse(results.content).weather[0].description);
			});
			return (Session.get('weather') + ' in ' + city).toUpperCase();	
		}
	});
	Template.layout.events({
		'change .cities': function(event, template){
			Session.set('city', template.find('.cities').value)
			Session.get('currentWeather');
		} 
	});
}
