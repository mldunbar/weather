import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
		return new Ember.RSVP.Promise(function(resolve, reject){
			navigator.geolocation.getCurrentPosition(function(position){

				resolve({
					lat: position.coords.latitude,
					long: position.coords.longitude
				});
				return(position.coords.latitude, position.coords.longitude);
			});
		});
	}
});
