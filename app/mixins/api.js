import Ember from 'ember';
import Api from 'mdrregister/utility/api';

const {
  Mixin,
  RSVP,
  inject
} = Ember;

const {
  Promise
} = RSVP;

const {
  service
} = inject;

export default Mixin.create({
  session: service(),
  skip: false,

  ajax(request) {
    const self = this;
    return new Promise((resolve, reject) => {
      let settings;
      let api;

      if (this.get('skip')) {
        resolve();
        return;
      }

      settings = {
        timeout: 120000,
        crossDomain: true
      };

      if (!request.id) {
        reject();
        return;
      }

      api = Api[request.id];

      if (!api) {
        reject();
        return;
      }

      settings.url = `${Api.MDR_API}${api.path}`;
      settings.method = api.method || 'GET';

      if (request.context) {
        settings.context = request.context;
      }

      if (request.data) {
        settings.data = request.data;
      }

      settings.beforeSend = () => {
        self.get('session').showProgressBar();
      };

      Ember.$.ajax(settings).done((...args) => {
        resolve(...args);
      }).fail((...args) => {
        reject(...args);
      }).always(() => {
        self.get('session').hideProgressBar();
      });
    });
  }
});
