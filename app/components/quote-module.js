import Ember from 'ember';
import layout from '../templates/components/quote-module';

export default Ember.Component.extend({
  layout: layout,
  target: Ember.computed.alias('targetObject')
});
