import Ember from 'ember';

export default Ember.Component.extend({
  model: function(){
    // return new Ember.RSVP.Promise(function(resolve, reject) {

    navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
// });
});
}
});
