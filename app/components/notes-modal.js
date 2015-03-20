import Ember from 'ember';
import layout from '../templates/components/notes-modal';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  targetObject: Em.computed.alias('parentView'),
  actions: {
    addNote: function() {
      this.sendAction('action', this.get('text'));
      this.set('text', '');
    }
  }
});
