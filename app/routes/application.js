import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return new Ember.RSVP.Promise(function(resolve, reject) {
  			navigator.geolocation.getCurrentPosition(resolve, reject);
		}).then(function(position) {
			return position.coords;
		});
	}

})
