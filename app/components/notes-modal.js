import Ember from 'ember';
import layout from '../templates/components/notes-modal';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  targetObject: Em.computed.alias('parentView'),
  actions: {
    addNote: function() {
      this.sendAction('addNote', this.get('text'));
      this.set('text', '');
    },
    deleteNote: function(noteId) {
      this.sendAction('deleteNote', noteId)
    }
  }
});
