import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

const {
  Route,
  run
} = Ember;

const {
  schedule
} = run;

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

Route.reopen({
  activate() {
    this._super(...arguments);

    schedule('afterRender', () => {
      Ember.$('.wrapper-main').css('min-height', Ember.$(window).height());
    });
  }
});

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  init() {
    this._super(...arguments);
    window.MDRregister = this;
  },

  ready() {
    this.inject('service:errorhandler', 'router', 'router:main');
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
