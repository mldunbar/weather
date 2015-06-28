import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return Ember.$.ajax('https://api.forecast.io/forecast/01990fee22f745663bd4d38f6cc2d36c/'+params.lat+','+params.lng,
     {dataType: 'jsonp'}).then(function(response){
       return(response);
    });
  }
});
