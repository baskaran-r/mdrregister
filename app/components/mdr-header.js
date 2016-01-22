import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'header',
  classNames: ['mdr-header'],
  ariaRole: 'header'
});
