import Ember from 'ember';

const {
  Service
} = Ember;

export default Service.extend({
  progressbar: false,
  ajaxCounter: 0,
  loading: false,

  showProgressBar() {
    this.incrementProperty('ajaxCounter');
    if (!this.get('progressbar')) {
      this.set('progressbar', true);
    }
  },

  hideProgressBar() {
    this.decrementProperty('ajaxCounter');
    if (this.get('progressbar') && !this.get('loading') && this.get('ajaxCounter') === 0) {
      this.set('progressbar', false);
    }
  },

  showLoadingBar() {
    if (!this.get('progressbar')) {
      this.setProperties({
        progressbar: true,
        loading: true
      });
    }
  },

  hideLoadingBar() {
    if (this.get('progressbar')) {
      this.setProperties({
        progressbar: false,
        loading: false
      });
    }
  }
});
