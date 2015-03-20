import Ember from 'ember';
import layout from '../templates/components/notes-modal';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  targetObject: Ember.computed.alias('parentView'),
  actions: {
    addNote: function(symbol) {

      var text = this.get('text');
      if (text.length > 0) {
        this.sendAction('addNote', this.get('text'), symbol);
        this.set('text', '');
      } else {
        // error trapping
      }
    },
    deleteNote: function(noteId) {
      this.sendAction('deleteNote', noteId);
    }
  }
});
