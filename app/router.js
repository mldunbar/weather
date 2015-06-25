import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  model: function() {
    return Ember.$.ajax("https://api.forecast.io/forecast/01990fee22f745663bd4d38f6cc2d36c/37.8267,-122.423", {dataType: 'jsonp'});
  }
  });

Router.map(function() {
});

// Router.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return Ember.$.ajax("https://api.forecast.io/forecast/01990fee22f745663bd4d38f6cc2d36c/37.8267,-122.423", {dataType: 'jsonp'});
//   }
// });

export default Router;
