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

  this.route('full-page-error', { path: '/error' })
  this.route('missing', { path: '/*path' });
});

export default Router;
