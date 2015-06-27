import Ember from 'ember';

export default Ember.Route.extend({
  model: function(options){
      return Ember.$.ajax('https://api.forecast.io/forecast/01990fee22f745663bd4d38f6cc2d36c/' + options.lat + ',' + options.long, {dataType: 'jsonp'});
    }
});
