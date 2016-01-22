import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('register', function() {
    this.route('agent');
    this.route('doctor');
    this.route('assessor');
  });

  this.route('confirmation');
});

export default Router;
