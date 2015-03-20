import Ember from 'ember';
import layout from '../templates/components/quote-module';

export default Ember.Component.extend({
  layout: layout,
  target: Em.computed.alias('targetObject')
});
